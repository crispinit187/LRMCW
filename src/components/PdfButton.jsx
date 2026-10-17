export default function PdfButton({ href, name, label = 'Download PDF', title }) {
  return (
    <a className="pdf-btn" href={href} download={name} title={title}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v11.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V3h2zM5 19h14v2H5v-2z" />
      </svg>
      {label}
    </a>
  );
}
