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
const SCHEDULE_SHAPES: { match: RegExp; shapes: string[] }[] = [
  {
    match: /nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,
    shapes: ['12-hour shifts, around the clock', 'Day / night rotation', 'On-call weekends'],
  },
  {
    match: /security|guard|patrol|officer|surveillance/i,
    shapes: ['24/7 coverage, 8-hour posts', 'Weekend-heavy events', 'Overnight-only crew'],
  },
  {
    match: /event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,
    shapes: ['Event-based, weekends heavy', 'Split shifts, peak evenings', 'Game-day surges'],
  },
  {
    match: /warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,
    shapes: ['Two shifts, Mon–Sat', 'Peak-season overtime', 'Early AM dock crew'],
  },
];

const GENERIC_SHAPES = ['9-to-5, weekdays', 'Rotating shifts', 'Weekend coverage'];

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
export function planWeekProblems(signal: string): WeekProblem[] {
  // Draw from a small generated crew so the names/roles match the operation.
  const crew = generateSampleTeammates(signal, 8);
  const [a, b, c, d] = crew;
  // A near-term expiry, forced inside 14 days and stable per worker.
  const expiryDays = 4 + (hashSeed(b.name) % 9); // 4–12 days

  return [
    { kind: 'callout', worker: a.name, role: a.role, detail: 'Called out for Saturday — the shift needs a fill.' },
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

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// Three around-the-clock shift bands — the default shape of a covered week.
const SHIFT_TIMES = ['6a–2p', '2p–10p', '10p–6a'];
// Shifts per day — sums to 24 (WEEK_SHIFTS), weekends a touch lighter.
const PER_DAY = [4, 3, 3, 4, 4, 3, 3];

/**
 * A deterministic week of shifts for the calendar view — 7 days, 24 shifts,
 * staffed from a vertical-appropriate crew. Saturday carries the planted
 * callout as an "Open" shift so the calendar and the "waiting" list agree.
 */
export function generateWeekShifts(signal: string): WeekDay[] {
  const crew = generateSampleTeammates(signal, 12);
  let ci = 0;

  const week = DAY_LABELS.map((label, d) => {
    const shifts: WeekShift[] = [];
    for (let i = 0; i < PER_DAY[d]; i++) {
      const who = crew[ci % crew.length].name.split(' ')[0];
      ci++;
      shifts.push({ time: SHIFT_TIMES[i % SHIFT_TIMES.length], who });
    }
    return { label, shifts };
  });

  // Saturday's opening shift is the callout — left open for a fill.
  if (week[5]?.shifts[0]) week[5].shifts[0] = { ...week[5].shifts[0], who: 'Open', flag: 'open' };
  // Tuesday carries a flag (the missed clock-out) so the calendar hints at it.
  if (week[1]?.shifts[0]) week[1].shifts[0] = { ...week[1].shifts[0], flag: 'watch' };

  return week;
}
