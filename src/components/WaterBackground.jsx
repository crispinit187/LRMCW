import { useEffect, useRef } from 'react';

const VERT = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }';

// Water-plane gradient in the ShaderGradient blues (#45cdff, #0a74ca, #102d95) with grain.
const FRAG = [
  'precision mediump float;',
  'uniform vec2 r; uniform float t;',
  'void main(){',
  '  vec2 uv = gl_FragCoord.xy / r;',
  '  vec2 q = (uv - 0.5) * vec2(r.x / r.y, 1.0);',
  '  float a = -1.05; q = mat2(cos(a), -sin(a), sin(a), cos(a)) * q;',
  '  vec2 s = q * 2.4;',
  '  for (int i = 0; i < 4; i++) { float fi = float(i);',
  '    s += 0.38 * vec2(sin(s.y * 1.7 + t * 0.30 + fi * 1.3), cos(s.x * 1.5 - t * 0.26 + fi * 0.7)); }',
  '  float n = 0.5 + 0.5 * sin(s.x * 2.0 + s.y * 1.3 + t * 0.22);',
  '  float m = 0.5 + 0.5 * sin(s.y * 2.4 - s.x * 0.8 - t * 0.18);',
  '  vec3 c1 = vec3(0.271, 0.804, 1.0);',
  '  vec3 c2 = vec3(0.039, 0.455, 0.792);',
  '  vec3 c3 = vec3(0.063, 0.176, 0.584);',
  '  vec3 col = mix(c3, c2, n);',
  '  col = mix(col, c1, pow(m, 3.0) * 0.6);',
  '  float g = fract(sin(dot(gl_FragCoord.xy + t, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;',
  '  col += g * 0.05;',
  '  gl_FragColor = vec4(col * 0.8, 1.0);',
  '}',
].join('\n');

export default function WaterBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return undefined;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let gl = null;
    try {
      gl = cv.getContext('webgl', { antialias: false, alpha: false });
    } catch (e) {
      gl = null;
    }
    if (!gl) return undefined;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(program, 'r');
    const uT = gl.getUniformLocation(program, 't');

    const size = () => {
      const scale = 0.6;
      cv.width = Math.max(2, Math.floor(window.innerWidth * scale));
      cv.height = Math.max(2, Math.floor(window.innerHeight * scale));
      gl.viewport(0, 0, cv.width, cv.height);
    };
    const draw = (ms) => {
      gl.uniform2f(uR, cv.width, cv.height);
      gl.uniform1f(uT, ms / 1000 + 8.0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const onResize = () => {
      size();
      draw(performance.now());
    };

    size();
    window.addEventListener('resize', onResize);

    let raf = 0;
    if (reduce) {
      draw(0);
    } else {
      const loop = (ms) => {
        draw(ms);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas id="water" ref={ref} aria-hidden="true" />;
}
