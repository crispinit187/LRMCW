// All page content lives here. To post an update, add an entry at the TOP of `updates`.

const base = import.meta.env.BASE_URL;

// Files in public/downloads are served from <site>/downloads/...
export const downloads = {
  plan: `${base}downloads/Choir-Practice-Plan-17-October-2026.pdf`,
  hymn: `${base}downloads/When-I-Survey-the-Wondrous-Cross-Hymn-180.pdf`,
  medley: `${base}downloads/The-Seed-and-the-Homeward-March-Full-Score.pdf`,
};

export const organiser = {
  church: 'New Apostolic Church',
  unit: 'Lusaka Region · Music Department',
};

export const hero = {
  invite: 'All brothers are invited',
  titleStart: 'Regional Combined ',
  titleEmphasis: 'Male Choir',
  titleEnd: ' Practice',
  theme: 'Theme: 800 Male Voices in the Advent of Christ’s Return — Soli Deo Gloria',
  lede: 'Preparation towards the 800 Male Choir Christmas Concert, December 2026.',
};

export const facts = [
  { label: 'Date', value: 'Saturday, 17 October 2026' },
  { label: 'Time', value: '12:00 – 16:30hrs', sub: 'Double session' },
  { label: 'Venue', value: 'Olympia Park Congregation', sub: 'Lusaka' },
];

export const concert = {
  name: '800 Male Choir Christmas Concert',
  date: 'Thursday, 24 December 2026',
  detail: '15:00hrs · Olympia Park Congregation, Lusaka',
  // Countdown target. Lusaka time (UTC+02:00).
  startsAt: '2026-12-24T15:00:00+02:00',
  // Type the name here when it is known. Empty shows a blank line.
  guestOfHonour: '',
};

// Newest first. `date` is ISO (YYYY-MM-DD), `label` is what readers see.
export const updates = [
  {
    date: '2026-10-17',
    label: '17 Oct 2026',
    title: 'Practice day',
    text: 'The regional practice runs today from 12:00hrs to 16:30hrs as a double session at Olympia Park Congregation. The full practice plan is on the Practice Plan page.',
  },
];

export const notes = [
  'Open to every brother. Choir membership is not required.',
  'Voice parts: First Tenor, Second Tenor, First Bass, Second Bass.',
  'The orchestra will take part in this practice.',
  'Bring your descant recorder. Recorder lessons begin in October.',
  'Register your name, voice part, congregation and phone number.',
];

export const pieces = [
  {
    label: 'Piece one',
    title: 'When I Survey the Wondrous Cross',
    pdf: downloads.hymn,
    pdfName: 'When-I-Survey-the-Wondrous-Cross-Hymn-180.pdf',
  },
  {
    label: 'Piece two',
    title: 'The Seed and the Homeward March',
    pdf: downloads.medley,
    pdfName: 'The-Seed-and-the-Homeward-March-Full-Score.pdf',
  },
];

export const target = {
  figure: '800',
  lead: 'Male voices across the Lusaka Region.',
  detail: '200 brothers from each Apostle Area, towards the Regional target of 800 male voices.',
};

export const verse = {
  text: 'O sing unto the Lord a new song.',
  reference: 'Psalm 96:1',
};

export const footer = {
  line1: 'New Apostolic Church · Lusaka Region · Music Department',
  line2: '800 Male Choir Christmas Concert, December 2026',
};

// ---------------------------------------------------------------------------
// Practice plan page. Source: Choir Practice Plan, 17 October 2026.
// `team` is a list of groups. A group with no `label` is a plain list of names.
// `pdf` shows a Download PDF button on that row.
// ---------------------------------------------------------------------------

const voices = (ft, st, fb, sb) => [
  { label: 'First Tenor', names: ft },
  { label: 'Second Tenor', names: st },
  { label: 'First Bass', names: fb },
  { label: 'Second Bass', names: sb },
];

export const practicePlan = {
  group: 'Combined Lusaka Region Male Choir',
  title: 'Choir Practice Plan',
  when: 'Saturday 17 October 2026',
  venue: 'Olympia Park Congregation, Lusaka',
  hours: '12:00hrs – 16:30hrs',
  theme: 'Theme: 800 Male Voices in the Advent of Christ’s Return — Soli Deo Gloria',
  footnote: 'All brothers should carry their recorders.',
  items: [
    {
      time: '12:00 – 12:30',
      activity: 'Venue preparation and seating by voice section',
      leader: 'Pr. Terrence Kamwi, Pr. Isaac Mwape, Pr. Fines Masumba',
      team: [{ names: ['Pr. Isaiah Mubitana', 'Pr. Nathan Nyambe', 'Pr. Abel Mufaya'] }],
    },
    {
      time: '12:30 – 12:50',
      activity: 'Registration and voice placement',
      leader: 'Shep. Chiko & ADR. Chilufya Mukosha',
      team: [
        {
          names: [
            'C. Ev Francis Chapingiza',
            'Pr. Terrence Kamwi',
            'Pr. Allan Zyambo',
            'Deacon Nathan Munsangu',
            'Pr. Allan Mufaya',
            'Pr. Isaiah Mubitana',
            'C. Ev Thomas Mbewe',
          ],
        },
      ],
    },
    {
      time: '12:55 – 13:00',
      activity: 'Opening hymn, prayer & opening remarks',
      leader: 'ACR Temwa Nyirenda, RML',
      team: [{ names: ['Sr. Leah Simasiku (ARML)', 'Pr. Sober Musenge (ARML)'] }],
    },
    {
      time: '13:00 – 13:05',
      activity: 'Objectives and practice calendar',
      leader: 'C. Ev Arnold Womba (Chairperson)',
      team: [],
    },
    {
      time: '13:05 – 13:10',
      activity: 'Posture training',
      leader: 'Pr. Pethius Sapato',
      team: [{ names: ['C. Ev Orbet Munkombwe'] }],
    },
    {
      time: '13:10 – 13:15',
      activity: 'Breath control training',
      leader: 'Pr. Allan Mufaya',
      team: [{ names: ['Deacon Raymond Ntanda', 'Shep Clement Manongwa'] }],
    },
    {
      time: '13:15 – 13:45',
      activity: '“When I Survey the Wondrous Cross” (Hymn 180 MC)',
      leader: 'C. Ev Jacob Lubasi',
      pdf: { href: downloads.hymn, name: 'When-I-Survey-the-Wondrous-Cross-Hymn-180.pdf' },
      team: voices(
        ['Pr. Oby Lubinda', 'Pr. Allan Mufaya', 'Pr. Allan Zyambo', 'Shep. Clement Manongwa'],
        ['Deacon Raymond Ntanda', 'Pr. Aaron Susiku', 'Pr. Isaiah Mubitana', 'Deacon Nathan Munsangu'],
        ['Pr. Pethius Sapato', 'Pr. Boyd Muyunda', 'Pr. Aaron Kakoma', 'Pr. Oliver Muyunda'],
        [
          'Pr. Isaac Mwape',
          'Deacon Walubita Litebele',
          'Br. Melvin Muyoyo',
          'Pr. Nathan Nyambe',
          'C. Ev Orbet Munkombwe',
        ],
      ),
    },
    {
      time: '13:45 – 14:45',
      activity: 'Medley teaching and blending: “The Seed and the Homeward March”',
      leader: 'C. Ev Thomas Subulwa / C. Ev Steven Siloka',
      pdf: { href: downloads.medley, name: 'The-Seed-and-the-Homeward-March-Full-Score.pdf' },
      team: voices(
        ['Pr. Oby Lubinda', 'C. Ev Boniface Jere', 'Pr. Allan Mufaya', 'Pr. Harrington Akushanga'],
        ['Deacon Raymond Ntanda', 'Pr. Isaiah Mubitana', 'Pr. Oliver Muyunda', 'Pr. Abel Mufaya'],
        ['Pr. Pethius Sapato', 'Pr. Nathan Nyambe', 'Br. Melvin Muyoyo', 'Pr. Terrence Kamwi'],
        ['Deacon Walubita Litebele', 'Deacon Nathan Munsangu', 'Pr. Isaac Mwape', 'ADR Chilufya Mukosha'],
      ),
    },
    {
      time: '14:45 – 15:00',
      activity: 'Vocal Male Choir Entrenchment of the song: “The Seed and the Homeward March”',
      leader: 'C. Ev Jacob Lubasi / C. Ev Arnold Womba',
      pdf: { href: downloads.medley, name: 'The-Seed-and-the-Homeward-March-Full-Score.pdf' },
      team: [],
    },
    {
      time: '15:00 – 15:15',
      activity: 'Opening concert hymn: “Holy, Holy, Holy Is the Lord” (Hymn 75 CHC)',
      leader: 'Dcn. Daniel Siisii / C. Ev Arnold Womba',
      team: voices(
        ['Pr. Oby Lubinda', 'Pr. Allan Mufaya', 'Pr. Thandiwe Mpofu'],
        ['Pr. Allan Zyambo', 'Pr. Pethius Sapato', 'Pr. Terrence Kamwi'],
        ['Deacon Walubita Litebele', 'Pr. Isaac Mwape', 'C. Ev Steven Siloka'],
        ['Pr. Hendrix Mulemwa', 'Pr. Boyd Muyunda', 'C. Ev Orbet Munkombwe'],
      ),
    },
    {
      time: '15:15 – 15:30',
      activity: 'Hymn: “When I Survey the Wondrous Cross” (Hymn 180 MC), full choir',
      leader: 'C. Ev Jacob Lubasi',
      pdf: { href: downloads.hymn, name: 'When-I-Survey-the-Wondrous-Cross-Hymn-180.pdf' },
      team: voices(
        ['Pr. Oby Lubinda', 'C. Ev Boniface Jere'],
        ['C. Ev Thomas Subulwa', 'Pr. Abel Mufaya'],
        ['Pr. Aaron Kakoma', 'Pr. Boyd Muyunda'],
        ['Pr. Isaac Mwape', 'Deacon Walubita Litebele'],
      ),
    },
    {
      time: '15:30 – 15:45',
      activity: 'Recorder ensemble introduction and performance',
      leader: 'Dcn. David Njamba',
      team: [{ names: ['Deacon Alex Munsaka', 'All Area Orchestra Coordinators'] }],
    },
    {
      time: '15:45 – 15:55',
      activity: 'Stage positioning drill',
      leader: 'Dcn. Daniel Siisii, Pr. Fines Masumba & Dcn. Alex Munsaka',
      team: [
        {
          names: [
            'Pr. Sober Musenge',
            'Pr. Isaiah Mubitana',
            'Pr. Isaac Mwape',
            'Pr. Terrence Kamwi',
            'Pr. Abel Mufaya',
          ],
        },
      ],
    },
    {
      time: '15:55 – 16:20',
      activity: 'Apostle Area Performances',
      leader: 'Pr. Abel Mufaya, Pr. Terrence Kamwi, C.E. Womba & ADR. Chilufya',
      note: 'Performance of 1 hymn to be performed by each of the respective areas.',
      team: [],
    },
    {
      time: '16:20 – 16:25',
      activity: 'Concert ticket update',
      leader: 'DR. Samuel Mwanangombe',
      team: [],
    },
    {
      time: '16:25 – 16:30',
      activity: 'Closing remarks and closing prayer',
      leader: 'TBA',
      team: [{ names: ['C. Ev Temwa Nyirenda (RML)'] }],
    },
  ],
};
