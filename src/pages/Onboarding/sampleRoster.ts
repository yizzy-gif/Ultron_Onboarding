/* ─────────────────────────────────────────────────────────────────────────────
   Sample-teammate generator — the roster step's "add sample teammates" path.

   The onboarding demo never parses a real file, so when a tester has no roster
   handy (or wants a fuller week to explore) we synthesise a believable one. The
   workers are derived from what Steps 1–2 already captured — the workforce type
   the admin typed / picked, and the company name from their website — so a
   home-care operator sees caregivers at clinics, not generic "Associates".

   Everything here is deterministic: a seeded PRNG keyed off the workforce type
   means the same operation always yields the same faces (no reshuffle on
   re-render), while different operations get visibly different rosters.

   DEMO ONLY — none of this is persisted or read downstream; it exists to make
   the sandbox feel populated so a full week can run.
   ───────────────────────────────────────────────────────────────────────────── */

export interface SampleWorker {
  name: string;
  role: string;
  location: string;
  /** Human tenure label, e.g. "New", "4 mo", "3 yr". */
  tenure: string;
  /** The credential this worker carries (already vertical-appropriate). */
  credential: string;
  /** Most are current; a realistic few expire in the near term. */
  credentialStatus: 'valid' | 'expiring';
  /** Days until expiry — present only when credentialStatus === 'expiring'. */
  expiresInDays?: number;
}

/* A real-shaped roster — Meridian Care Staffing, a healthcare staffing operation
   (12 clinicians across three Texas-area facilities). Mapped from the sample
   `meridian_worker_roster.xlsx` a tester provided, into the SampleWorker shape:
   credential comes from each role's required license (the file's Roles sheet),
   tenure is derived from the start date (relative to mid-2026). The roster step
   shows these faces for the imported preview and the sample crew, so the demo
   reads as a believable operation rather than synthetic filler. DEMO ONLY. */
export const MERIDIAN_ROSTER: SampleWorker[] = [
  { name: 'Alicia Nguyen', role: 'Registered Nurse', location: "St. David's North", tenure: '3 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: 'Marcus Bell', role: 'Registered Nurse', location: 'Baylor Grapevine', tenure: '2 yr', credential: 'RN License', credentialStatus: 'expiring', expiresInDays: 21 },
  { name: 'Priya Shah', role: 'Charge Nurse', location: "St. David's North", tenure: '3 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: 'Devon Carter', role: 'Certified Nursing Assistant', location: 'Methodist Dallas', tenure: '2 yr', credential: 'CNA Certificate', credentialStatus: 'valid' },
  { name: 'Sofia Ramirez', role: 'Registered Nurse', location: 'Methodist Dallas', tenure: '2 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: "James O'Connor", role: 'Licensed Vocational Nurse', location: 'Baylor Grapevine', tenure: '3 yr', credential: 'LVN License', credentialStatus: 'valid' },
  { name: 'Fatima Al-Rashid', role: 'Registered Nurse', location: "St. David's North", tenure: '4 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: 'Tyler Brooks', role: 'Certified Nursing Assistant', location: 'Methodist Dallas', tenure: '2 yr', credential: 'CNA Certificate', credentialStatus: 'expiring', expiresInDays: 9 },
  { name: 'Grace Kim', role: 'Charge Nurse', location: 'Baylor Grapevine', tenure: '3 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: 'Leon Whitfield', role: 'Registered Nurse', location: "St. David's North", tenure: '2 yr', credential: 'RN License', credentialStatus: 'valid' },
  { name: 'Hannah Torres', role: 'Licensed Vocational Nurse', location: 'Methodist Dallas', tenure: '3 yr', credential: 'LVN License', credentialStatus: 'valid' },
  { name: 'Omar Haddad', role: 'Registered Nurse', location: 'Baylor Grapevine', tenure: '2 yr', credential: 'RN License', credentialStatus: 'valid' },
];

// The role / location / credential palette for one kind of operation. Kept plain
// and specific — uncanny or over-clever demo data breaks the sandbox payoff.
interface VerticalProfile {
  roles: string[];
  locations: string[];
  credentials: string[];
}

// Keyword → profile. Matched against the workforce type + company name, most
// specific first (healthcare before the generic fallthrough). The labels mirror
// the kind of records the live Ultron app carries (RN / Forklift Op / Caregiver).
const VERTICALS: { match: RegExp; profile: VerticalProfile }[] = [
  {
    match: /nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,
    profile: {
      roles: ['RN', 'LPN', 'CNA', 'Caregiver', 'Med Aide', 'Charge Nurse'],
      locations: ['Riverside Clinic', 'Lakeside Care', 'Mercy Ward', 'Home Visits', 'Northgate Rehab'],
      credentials: ['RN License', 'BLS', 'CPR', 'TB Screening', 'CNA Certification'],
    },
  },
  {
    match: /security|guard|patrol|officer|surveillance/i,
    profile: {
      roles: ['Security Officer', 'Site Supervisor', 'Patrol', 'Console Operator'],
      locations: ['Tower Plaza', 'North Gate', 'Event Hall', 'West Lot', 'Loading Dock'],
      credentials: ['Guard Card', 'First Aid', 'CPR', 'Baton Permit'],
    },
  },
  {
    match: /event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,
    profile: {
      roles: ['Event Staff', 'Bartender', 'Usher', 'Setup Crew', 'Concessions', 'Lead'],
      locations: ['Main Arena', 'Concourse A', 'Club Level', 'North Gate', 'Back of House'],
      credentials: ['Food Handler', 'Alcohol Service', 'Crowd Safety'],
    },
  },
  {
    match: /warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,
    profile: {
      roles: ['Forklift Op', 'Picker', 'Loader', 'Foreman', 'Yard Lead', 'Driver'],
      locations: ['Bay 4', 'Dock 2', 'Yard', 'Line A', 'North Warehouse', 'Staging'],
      credentials: ['Forklift Cert', 'OSHA 10', 'CDL', 'Safety Orientation'],
    },
  },
];

// Fallback for anything we can't classify — a plausible multi-site shift operation.
const GENERIC: VerticalProfile = {
  roles: ['Associate', 'Team Lead', 'Coordinator', 'Specialist', 'Shift Lead'],
  locations: ['Downtown', 'North Site', 'West Branch', 'Central', 'East Yard'],
  credentials: ['Onboarding', 'I-9 Verified', 'Safety Orientation'],
};

// Deliberately ordinary, varied names — the point is "these read as real people",
// not a showcase. First and last pools are combined so the set doesn't repeat.
const FIRST_NAMES = [
  'Maria', 'James', 'Sofia', 'Kenji', 'Aisha', 'Diego', 'Priya', 'Marcus',
  'Elena', 'Tomas', 'Grace', 'Omar', 'Hannah', 'Luis', 'Nia', 'Peter',
  'Yuki', 'Carlos', 'Fatima', 'Noah', 'Ivy', 'Samuel', 'Leila', 'Andre',
  'Mei', 'Jonah', 'Zoe', 'Rashid', 'Clara', 'Dev',
];

const LAST_NAMES = [
  'Ellis', 'Marin', 'Tanaka', 'Okafor', 'Nguyen', 'Alvarez', 'Patel', 'Cole',
  'Rossi', 'Haddad', 'Kim', 'Santos', 'Weaver', 'Duval', 'Bauer', 'Reyes',
  'Osei', 'Lindqvist', 'Mercer', 'Bianchi', 'Farah', 'Novak', 'Quinn', 'Abara',
];

// A spread of tenures weighted toward "settled" with a handful of new hires —
// the mix a real roster shows after a year or two of operating.
const TENURES = ['New', '2 wk', '1 mo', '4 mo', '7 mo', '1 yr', '2 yr', '3 yr', '5 yr'];

// mulberry32 — a tiny, fast, well-distributed seedable PRNG. Deterministic output
// keeps the generated faces stable across re-renders (no Math.random flicker).
function makePrng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Stable 32-bit hash of a string — turns the workforce type into a PRNG seed so
// each operation gets its own repeatable roster.
function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function profileFor(signal: string): VerticalProfile {
  const found = VERTICALS.find(v => v.match.test(signal));
  return found ? found.profile : GENERIC;
}

/**
 * Generate `count` believable sample teammates for the operation described by
 * `signal` (the workforce type and/or company name captured earlier). Roughly
 * one in six carries a near-term credential expiry, so the sandbox has real
 * compliance work to surface — the rest are current.
 */
export function generateSampleTeammates(signal: string, count: number): SampleWorker[] {
  const profile = profileFor(signal);
  const rng = makePrng(hashSeed(signal || 'teambridge') ^ count);
  const pick = <T,>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];

  const workers: SampleWorker[] = [];
  const usedNames = new Set<string>();

  while (workers.length < count) {
    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
    if (usedNames.has(name)) continue; // keep the roster free of duplicate faces
    usedNames.add(name);

    // ~1 in 6 has a credential expiring in the next few weeks — enough to make
    // compliance feel live without the whole roster looking lapsed.
    const expiring = rng() < 0.16;
    workers.push({
      name,
      role: pick(profile.roles),
      location: pick(profile.locations),
      tenure: pick(TENURES),
      credential: pick(profile.credentials),
      credentialStatus: expiring ? 'expiring' : 'valid',
      ...(expiring ? { expiresInDays: 3 + Math.floor(rng() * 27) } : {}),
    });
  }

  return workers;
}

/* ── Schedule step — shape chips + planted week problems ─────────────────────── */

// Vertical-appropriate ways an operation describes the shape of its week — the
// one-tap chips on the schedule step's "tell us the shape of it" path. Matched
// against the same signal as the roster verticals, most specific first.
const SCHEDULE_SHAPES: { match: RegExp; label: string; shapes: string[] }[] = [
  {
    match: /nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,
    label: 'Clinical coverage',
    shapes: ['12-hour shifts, around the clock', 'Day / night rotation', 'On-call weekends'],
  },
  {
    match: /security|guard|patrol|officer|surveillance/i,
    label: 'Post coverage',
    shapes: ['24/7 coverage, 8-hour posts', 'Weekend-heavy events', 'Overnight-only crew'],
  },
  {
    match: /event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,
    label: 'Event staffing',
    shapes: ['Event-based, weekends heavy', 'Split shifts, peak evenings', 'Game-day surges'],
  },
  {
    match: /warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,
    label: 'Dock coverage',
    shapes: ['Two shifts, Mon–Sat', 'Peak-season overtime', 'Early AM dock crew'],
  },
];

const GENERIC_SHAPES = ['9-to-5, weekdays', 'Rotating shifts', 'Weekend coverage'];
const GENERIC_SCHEDULE_LABEL = 'Team coverage';

/** The pattern chips to offer for the operation described by `signal`. */
export function scheduleShapesFor(signal: string): string[] {
  return SCHEDULE_SHAPES.find(s => s.match.test(signal))?.shapes ?? GENERIC_SHAPES;
}

export interface WeekProblem {
  kind: 'callout' | 'expiring' | 'missing';
  worker: string;
  role: string;
  detail: string;
}

/**
 * The problems planted into a generated (or freshly mapped) week — the work
 * Ultron is about to handle. Always the same shape: one callout, one credential
 * expiring inside 14 days, two missing punches. Attached to vertical-appropriate
 * workers (real names, real roles) and deterministic for a given `signal`.
 */
export function planWeekProblems(signal: string, calloutDay = 'Saturday'): WeekProblem[] {
  // Draw from a small generated crew so the names/roles match the operation.
  const crew = generateSampleTeammates(signal, 8);
  const [a, b, c, d] = crew;
  // A near-term expiry, forced inside 14 days and stable per worker.
  const expiryDays = 4 + (hashSeed(b.name) % 9); // 4–12 days

  return [
    // `calloutDay` comes from the generated week (see calloutDayName) so the
    // problem names the same day the calendar actually left open — a
    // weekday-only shape has no Saturday shift to call out.
    { kind: 'callout', worker: a.name, role: a.role, detail: `Called out for ${calloutDay} — the shift needs a fill.` },
    { kind: 'expiring', worker: b.name, role: b.role, detail: `${b.credential} expires in ${expiryDays} days.` },
    { kind: 'missing', worker: c.name, role: c.role, detail: 'Missed a clock-out Tuesday.' },
    { kind: 'missing', worker: d.name, role: d.role, detail: "Didn't punch in Thursday." },
  ];
}

export interface WeekShift {
  time: string;
  /** First name of the assigned worker, or "Open" for an unfilled shift. */
  who: string;
  /** 'open' = needs a fill (the Saturday callout); 'watch' = has a flag on it. */
  flag?: 'open' | 'watch';
}

export interface WeekDay {
  label: string;
  shifts: WeekShift[];
}

export interface SchedulePreviewData {
  label: string;
  shape: string;
  week: WeekDay[];
}

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// Three around-the-clock shift bands — the default shape of a covered week.
const SHIFT_TIMES = ['6a–2p', '2p–10p', '10p–6a'];
// Shifts per day — weekends a touch lighter.
const PER_DAY = [4, 3, 3, 4, 4, 3, 3];

/** How a described week lays out: which bands run, and how many shifts land on
 *  each day (Mon → Sun). */
interface WeekShape {
  bands: string[];
  perDay: number[];
}

/** The week each schedule chip actually produces. Matched on the words the
 *  chips use (see SCHEDULE_SHAPES and GENERIC_SHAPES) rather than on the exact
 *  strings, so a vertical's phrasing and the generic phrasing land on the same
 *  pattern — "On-call weekends" and "Weekend coverage" both build a
 *  weekend-loaded week. First match wins, so the more specific rules lead. */
const WEEK_SHAPES: { match: RegExp; shape: WeekShape }[] = [
  // Nights only — a single overnight band, thin and even.
  { match: /overnight/i, shape: { bands: ['10p–6a'], perDay: [2, 2, 2, 2, 2, 2, 2] } },
  // Game days — midweek almost dark, everything surging onto the weekend.
  { match: /game-?day/i, shape: { bands: ['11a–7p', '3p–11p'], perDay: [0, 0, 0, 1, 3, 7, 6] } },
  // Weekend-loaded — a skeleton Mon–Wed, the work stacked Fri → Sun.
  { match: /weekend|event/i, shape: { bands: ['10a–6p', '4p–12a', '6p–2a'], perDay: [1, 1, 1, 2, 5, 6, 4] } },
  // Peak season — heavy every day, three bands running.
  { match: /peak-?season|overtime/i, shape: { bands: ['6a–2p', '2p–10p', '10p–6a'], perDay: [5, 5, 5, 5, 5, 4, 3] } },
  // Split shifts around the evening peak.
  { match: /split|peak|evening/i, shape: { bands: ['11a–3p', '5p–11p'], perDay: [2, 2, 2, 4, 4, 4, 2] } },
  // Twelve-hour bands, four a day, all seven days.
  { match: /12-hour/i, shape: { bands: ['6a–6p', '6p–6a'], perDay: [4, 4, 4, 4, 4, 4, 4] } },
  // A day/night rotation — same idea, lighter and on its own clock, so it does
  // not render identically to the 12-hour chip that sits beside it.
  { match: /day ?\/ ?night|rotat/i, shape: { bands: ['7a–7p', '7p–7a'], perDay: [3, 3, 3, 3, 3, 3, 3] } },
  // Round-the-clock posts — three 8-hour bands, even across the week.
  { match: /around the clock|24\/7|8-hour/i, shape: { bands: ['6a–2p', '2p–10p', '10p–6a'], perDay: [3, 3, 3, 3, 3, 3, 3] } },
  // Early dock crew — starts before dawn, tapering into Saturday.
  { match: /dock|early ?am/i, shape: { bands: ['4a–12p', '6a–2p'], perDay: [5, 5, 5, 5, 5, 2, 0] } },
  // Mon–Sat, two bands, Sunday dark.
  { match: /mon.?sat/i, shape: { bands: ['6a–2p', '2p–10p'], perDay: [4, 4, 4, 4, 4, 3, 0] } },
  // Business hours, weekdays only — the weekend is dark.
  { match: /9-to-5|weekday/i, shape: { bands: ['9a–5p', '7a–3p'], perDay: [4, 4, 4, 4, 4, 0, 0] } },
];

/** Used when the schedule arrived as a document rather than a described shape,
 *  or when nothing matched. */
const DEFAULT_WEEK_SHAPE: WeekShape = { bands: SHIFT_TIMES, perDay: PER_DAY };

function weekShapeFor(shape?: string): WeekShape {
  if (!shape) return DEFAULT_WEEK_SHAPE;
  return WEEK_SHAPES.find(s => s.match.test(shape))?.shape ?? DEFAULT_WEEK_SHAPE;
}

/**
 * A deterministic week of shifts for the calendar view — 7 days, 24 shifts,
 * staffed from a vertical-appropriate crew. Saturday carries the planted
 * callout as an "Open" shift so the calendar and the "waiting" list agree.
 */
export function generateWeekShifts(signal: string, shape?: string): WeekDay[] {
  const crew = generateSampleTeammates(signal, 12);
  const { bands, perDay } = weekShapeFor(shape);
  let ci = 0;

  const week = DAY_LABELS.map((label, d) => {
    const shifts: WeekShift[] = [];
    for (let i = 0; i < perDay[d]; i++) {
      const who = crew[ci % crew.length].name.split(' ')[0];
      ci++;
      shifts.push({ time: bands[i % bands.length], who });
    }
    return { label, shifts };
  });

  // The callout lands on Saturday when the shape staffs it, and otherwise on
  // the last day that actually runs — a weekday-only week has no Saturday shift
  // to drop, and the planted problem has to point at a shift that exists.
  const callout = calloutIndex(week);
  if (callout >= 0) week[callout].shifts[0] = { ...week[callout].shifts[0], who: 'Open', flag: 'open' };
  // The missed clock-out flag, on Tuesday where the shape runs it.
  const watch = week[1]?.shifts.length ? 1 : week.findIndex(d => d.shifts.length);
  if (watch >= 0 && watch !== callout) week[watch].shifts[0] = { ...week[watch].shifts[0], flag: 'watch' };

  return week;
}

/** A realistic first-glance schedule for the intake card. The uploader is a
 *  coverage illustration rather than the generated result, so keep three
 *  staffed bands visible across all seven days. This makes the full-week shape
 *  legible at a glance while the schedule built after submission still follows
 *  the operator's selected pattern exactly. */
export function schedulePreviewFor(signal: string): SchedulePreviewData {
  const vertical = SCHEDULE_SHAPES.find(s => s.match.test(signal));
  const shape = vertical?.shapes[0] ?? GENERIC_SHAPES[0];
  const shapedWeek = generateWeekShifts(signal, shape);
  const week = shapedWeek.map((day, dayIndex) => {
    const shifts = day.shifts.slice(0, 3);
    while (shifts.length < 3) {
      const bandIndex = shifts.length;
      shifts.push({
        time: SHIFT_TIMES[bandIndex],
        who: `Coverage ${dayIndex + 1}-${bandIndex + 1}`,
      });
    }
    return { ...day, shifts };
  });

  return {
    label: vertical?.label ?? GENERIC_SCHEDULE_LABEL,
    shape: 'Full-week shift coverage',
    week,
  };
}

/** Index of the day carrying the open (called-out) shift, or -1 for an empty
 *  week. Saturday by preference, else the last staffed day. */
function calloutIndex(week: WeekDay[]): number {
  if (week[5]?.shifts.length) return 5;
  for (let d = week.length - 1; d >= 0; d--) if (week[d].shifts.length) return d;
  return -1;
}

/** Full name of the day the callout landed on, for the problem copy. */
export function calloutDayName(week: WeekDay[]): string {
  const i = calloutIndex(week);
  return i >= 0 ? DAY_NAMES[i] : DAY_NAMES[5];
}
