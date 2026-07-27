/* ─────────────────────────────────────────────────────────────────────────────
   Workforce sample datasets — the "what Ultron read off the site" library.

   The website path of the intro flow doesn't crawl a real site (it's a
   prototype). Instead, the pasted domain is matched to one of these scripted
   datasets — each a distinct staffing / workforce archetype — so the activation
   step can show a believable "here's what I learned" summary card. The shapes
   mirror the Favorite Healthcare Staffing category structure the samples were
   modelled on (worker types, talent, clients, service models, tech, access,
   compliance). Nothing here is fetched — the story is the same every run for a
   given domain. DEMO DATA ONLY. */

export interface WorkforceSample {
  workforce_type: string;
  company: {
    name: string;
    founded: number;
    parent: string | null;
    market_position: string;
    footprint: string;
  };
  worker_types: string[];
  talent_categories: string[];
  client_types: string[];
  service_models: string[];
  tech_footprint: string[];
  access_model: string[];
  compliance: string[];
  /** The "here's what I learned" read-out — three groups, three sentences each
   *  at most. The bolded labels let someone parse it in a glance, and every
   *  section ends with what Ultron DID about it, not just what it noticed. The
   *  third label flexes per archetype (compliance vs operations). Each group
   *  carries a few short tags — the signals behind the prose, shown as chips. */
  narrative: { label: string; body: string; tags: string[] }[];
  /** The "Configured for you" checklist that closes the read-out — the concrete
   *  setup Ultron did, one checkable line each, distilled from the narrative. */
  configured: string[];
}

export const WORKFORCE_SAMPLES: WorkforceSample[] = [
  {
    workforce_type: 'Healthcare / Clinical Staffing',
    company: {
      name: 'Favorite Healthcare Staffing',
      founded: 1981,
      parent: 'Acacium Group',
      market_position: 'Top-10 US healthcare staffing firm',
      footprint: 'US, Europe, Australia',
    },
    worker_types: ['Per diem', 'Travel', 'Contract / temp-to-perm', 'Permanent / direct hire'],
    talent_categories: ['Nursing (RN/LPN/CNA)', 'Allied Health', 'Non-Clinical', 'Advanced Practice', 'Emergency Response'],
    client_types: ['Hospitals', 'Acute care systems', 'Surgery centers', 'Senior living / long-term care', 'School-based settings'],
    service_models: ['MSP', 'VMS', 'Float pool management', 'Human Capital Management'],
    tech_footprint: ['Worker ATS', 'Client portal (FMS)', 'Affiliate vendor portal', 'Worker mobile app (time/pay)'],
    access_model: ['Workers', 'Clients', 'Affiliate vendors'],
    compliance: ['Joint Commission', 'Credentialing', 'Immunization tracking', 'OSHA', 'Facility-specific training'],
    narrative: [
      {
        label: 'Business',
        body: "Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",
        tags: ['Per diem', 'Travel', 'Contract', 'Permanent', 'MSP / VMS'],
      },
      {
        label: 'Workforce',
        body: 'RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.',
        tags: ['RN / LPN / CNA', 'Allied health', 'Advanced practice', 'Non-clinical'],
      },
      {
        label: 'Compliance',
        body: "Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",
        tags: ['Credentialing', 'Compact licenses', 'Immunizations', 'Joint Commission'],
      },
    ],
    configured: [
      'Scheduling for per diem, travel, contract, and permanent placements',
      'Credentials and licenses tracked with expirations — compact nursing included',
      'Access for client facilities and affiliate vendors, not just workers',
      'Shifts, timecards, and urgent fills from a phone',
    ],
  },
  {
    workforce_type: 'Skilled Trades / Construction Labor',
    company: {
      name: 'BuildForce Trades Group',
      founded: 1998,
      parent: null,
      market_position: 'Regional trades staffing leader (Mountain West)',
      footprint: 'US Southwest & Mountain West',
    },
    worker_types: ['Day labor', 'Project contract', 'Union dispatch', 'Direct hire'],
    talent_categories: ['Electricians', 'Welders / pipefitters', 'Carpenters', 'HVAC techs', 'Heavy equipment operators', 'General laborers'],
    client_types: ['General contractors', 'Industrial plants', 'Commercial developers', 'Utilities', 'Municipal / public works'],
    service_models: ['Project-based staffing', 'Payroll / W-2 hosting', 'Union hall dispatch coordination', 'Safety compliance management'],
    tech_footprint: ['Dispatch board', 'Client project portal', 'Field clock-in mobile app', 'Certification tracker'],
    access_model: ['Tradesworkers', 'Contractors / site supers', 'Union reps'],
    compliance: ['OSHA 10/30', 'Trade licensing', 'Drug screening', 'Right-to-work / E-Verify', 'Site safety orientation'],
    narrative: [
      {
        label: 'Business',
        body: "Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",
        tags: ['Day labor', 'Project contract', 'Union dispatch', 'Direct hire'],
      },
      {
        label: 'Workforce',
        body: 'Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.',
        tags: ['Electricians', 'Welders', 'Carpenters', 'HVAC', 'Equipment operators'],
      },
      {
        label: 'Compliance',
        body: "Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",
        tags: ['OSHA 10/30', 'Trade licenses', 'Drug screening', 'E-Verify'],
      },
    ],
    configured: [
      'Project-based scheduling with union dispatch coordination',
      'Payroll hosting for W-2 placements',
      'OSHA 10/30 and trade licenses tracked with expirations',
      'Field clock-ins and timecards from a phone',
    ],
  },
  {
    workforce_type: 'Warehouse / Logistics & Light Industrial',
    company: {
      name: 'PalletPoint Workforce',
      founded: 2011,
      parent: 'Everline Labor Holdings',
      market_position: 'High-volume light industrial staffing',
      footprint: 'US national, distribution-corridor focused',
    },
    worker_types: ['Temp (shift)', 'Temp-to-hire', 'Seasonal surge', 'Direct placement'],
    talent_categories: ['Pickers / packers', 'Forklift operators', 'Machine operators', 'Sortation associates', 'Inventory / cycle count', 'Shift leads'],
    client_types: ['3PL warehouses', 'E-commerce fulfillment', 'Manufacturers', 'Cold storage', 'Distribution centers'],
    service_models: ['On-site managed staffing', 'Volume ramp / peak season', 'Vendor-on-premise (VOP)', 'Payroll processing'],
    tech_footprint: ['Shift scheduling app', 'Client headcount dashboard', 'Kiosk / badge clock-in', 'Attendance & reliability scoring'],
    access_model: ['Associates', 'Warehouse managers', 'On-site coordinators'],
    compliance: ['Forklift certification (PIT)', 'I-9 / E-Verify', 'Safety training', 'Background check', "Workers' comp classification"],
    narrative: [
      {
        label: 'Business',
        body: "High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",
        tags: ['Shift temps', 'Temp-to-hire', 'Seasonal surge', 'On-site managed'],
      },
      {
        label: 'Workforce',
        body: 'Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.',
        tags: ['Pickers / packers', 'Forklift operators', 'Sortation', 'Shift leads'],
      },
      {
        label: 'Operations',
        body: "Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",
        tags: ['Fill rates', 'Site check-ins', 'Forklift certs', 'I-9 / E-Verify'],
      },
    ],
    configured: [
      'Shift scheduling that ramps headcount for peak season',
      'Attendance and reliability scoring from badge clock-ins',
      'Fill rates and check-ins tracked per site — billing tied to verified hours',
      'Forklift certifications and I-9s tracked with expirations',
    ],
  },
  {
    workforce_type: 'Security / Guarding Services',
    company: {
      name: 'Sentinel Guard Solutions',
      founded: 1996,
      parent: null,
      market_position: 'Contract security & manned guarding provider',
      footprint: 'US national, metro & industrial sites',
    },
    worker_types: ['Post assignment (regular)', 'Flex / relief pool', 'Event / short-term detail', 'Direct hire'],
    talent_categories: ['Unarmed guards', 'Armed guards', 'Mobile patrol officers', 'Console / CCTV operators', 'Event security', 'Site supervisors'],
    client_types: ['Commercial real estate', 'Industrial / manufacturing sites', 'Retail / malls', 'Healthcare campuses', 'Residential communities', 'Special events'],
    service_models: ['Managed guarding contract', 'Post scheduling & coverage', 'Mobile patrol routes', 'Payroll & billing reconciliation', 'Post-order management'],
    tech_footprint: ['Guard scheduling / post board', 'Client incident portal', 'GPS tour / checkpoint app', 'Incident reporting system'],
    access_model: ['Guards / officers', 'Client site contacts', 'Field supervisors / dispatch'],
    compliance: ['State guard license / registration', 'Armed permit & firearms qualification', 'Background check & fingerprinting', 'Drug screening', 'Post-specific training / SOPs'],
    narrative: [
      {
        label: 'Business',
        body: "Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",
        tags: ['Fixed posts', 'Flex relief', 'Mobile patrol', 'Event details'],
      },
      {
        label: 'Workforce',
        body: "Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",
        tags: ['Armed guard', 'Unarmed guard', 'Console / CCTV', 'Site supervisors'],
      },
      {
        label: 'Operations',
        body: "Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",
        tags: ['Post check-ins', 'Verified hours', 'Guard licenses', 'Firearms quals'],
      },
    ],
    configured: [
      'Post-based scheduling alongside patrol routes and event details',
      'Pay rates by post type — armed vs. unarmed',
      'On-site check-ins tied to billing — no ghost shifts',
      'Guard licenses and firearms qualifications tracked with expirations',
    ],
  },
  {
    workforce_type: 'Home Care / In-Home Support',
    company: {
      name: 'Hearthside Home Care',
      founded: 2009,
      parent: null,
      market_position: 'Non-medical & skilled in-home care agency',
      footprint: 'US regional, franchise-based',
    },
    worker_types: ['Per visit / hourly', 'Live-in', 'On-call pool', 'Direct hire'],
    talent_categories: ['Home health aides (HHA)', 'Certified nursing assistants (CNA)', 'Personal care aides (PCA)', 'Companions / homemakers', 'Skilled nurses (RN/LPN)', 'Care coordinators'],
    client_types: ['Private-pay families', 'Medicaid / waiver programs', 'Managed care / insurers', 'Hospice partners', 'Assisted living referrals'],
    service_models: ['Managed care scheduling', 'EVV-compliant visit management', 'Care plan administration', 'Payroll & claims billing', 'Family communication portal'],
    tech_footprint: ['Caregiver visit / EVV mobile app', 'Family / client portal', 'Scheduling & matching system', 'Care plan & notes dashboard'],
    access_model: ['Caregivers', 'Clients / family members', 'Care coordinators / case managers'],
    compliance: ['State caregiver certification (HHA/CNA)', 'EVV (Electronic Visit Verification)', 'Background check & abuse registry', 'TB test / health screening', 'HIPAA & care plan compliance'],
    narrative: [
      {
        label: 'Business',
        body: "In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",
        tags: ['Private pay', 'Medicaid / waiver', 'Hospice partners', 'Live-in'],
      },
      {
        label: 'Workforce',
        body: "HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",
        tags: ['HHA', 'CNA', 'PCA', 'Skilled nurses'],
      },
      {
        label: 'Compliance',
        body: "EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",
        tags: ['EVV', 'Certifications', 'TB screening', 'Abuse registry'],
      },
    ],
    configured: [
      'Visit-based scheduling with care plans attached',
      'EVV-compliant clock-ins on every visit — Medicaid billing holds up',
      'Access for families and care coordinators, not just caregivers',
      'Caregiver certifications and screenings tracked with expirations',
    ],
  },
  {
    workforce_type: 'Agriculture / Seasonal Labor',
    company: {
      name: 'Harvest Field Labor Co.',
      founded: 2000,
      parent: null,
      market_position: 'Seasonal agricultural & H-2A labor provider',
      footprint: 'US agricultural regions (CA, PNW, Southeast)',
    },
    worker_types: ['Seasonal / harvest crew', 'H-2A guest worker', 'Day labor', 'Crew lead / foreman'],
    talent_categories: ['Field harvesters / pickers', 'Packing house workers', 'Irrigation / field techs', 'Equipment operators', 'Crew leaders', 'Grading / sorting staff'],
    client_types: ['Farms & orchards', 'Packing / processing facilities', 'Vineyards', 'Nurseries / greenhouses', 'Agricultural co-ops'],
    service_models: ['Seasonal crew staffing', 'H-2A program administration', 'Transportation & housing coordination', 'Piece-rate & payroll processing', 'Farm labor contractor (FLC) services'],
    tech_footprint: ['Crew / field dispatch app', 'Grower headcount portal', 'Piece-rate / harvest tracking', 'Compliance document tracker'],
    access_model: ['Field workers', 'Growers / farm managers', 'Crew leaders / foremen'],
    compliance: ['H-2A / visa documentation', 'I-9 / work authorization', 'Farm Labor Contractor (FLC) license', 'Field sanitation & heat illness (OSHA/Cal-OSHA)', 'Piece-rate & minimum wage compliance'],
    narrative: [
      {
        label: 'Business',
        body: "Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",
        tags: ['Harvest crews', 'H-2A program', 'Packing houses', 'Piece-rate'],
      },
      {
        label: 'Workforce',
        body: 'Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.',
        tags: ['Harvesters', 'Packing workers', 'Equipment operators', 'Crew leaders'],
      },
      {
        label: 'Compliance',
        body: "H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",
        tags: ['Visa docs', 'FLC license', 'Heat illness / OSHA', 'Wage compliance'],
      },
    ],
    configured: [
      'Crew-based scheduling with piece-rate pay built in',
      'Piece-rate records reconciled against minimum wage automatically',
      'H-2A visa documentation and FLC license tracked with expirations',
      'Field dispatch through crew leaders, from a phone',
    ],
  },
  {
    workforce_type: 'Hospitality / Events Staffing',
    company: {
      name: 'Grand Table Hospitality Staff',
      founded: 2003,
      parent: null,
      market_position: 'Premium events & F&B staffing',
      footprint: 'Major US metro markets',
    },
    worker_types: ['Per event / gig', 'On-call pool', 'Seasonal', 'Direct hire'],
    talent_categories: ['Servers / banquet staff', 'Bartenders', 'Line / prep cooks', 'Housekeeping', 'Front desk / concierge', 'Event captains'],
    client_types: ['Hotels & resorts', 'Catering companies', 'Convention centers', 'Restaurants', 'Private / corporate events'],
    service_models: ['Event-based staffing', 'On-call pool management', 'Managed F&B labor', 'Payroll & tip reconciliation'],
    tech_footprint: ['Gig scheduling app', 'Client event booking portal', 'Geo clock-in / out', 'Rating & rebooking system'],
    access_model: ['Staff / gig workers', 'Event planners / venue managers', 'Agency dispatchers'],
    compliance: ['Food handler / alcohol service permits', 'I-9 / work authorization', 'Uniform & appearance standards', 'Minor labor law (if applicable)', 'Tip credit / wage compliance'],
    narrative: [
      {
        label: 'Business',
        body: "Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",
        tags: ['Per-event gigs', 'On-call pool', 'Seasonal', 'Tip reconciliation'],
      },
      {
        label: 'Workforce',
        body: 'Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.',
        tags: ['Servers', 'Bartenders', 'Cooks', 'Event captains'],
      },
      {
        label: 'Operations',
        body: "Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",
        tags: ['Geo clock-ins', 'Event check-ins', 'Food handler', 'Alcohol permits'],
      },
    ],
    configured: [
      'Event-based scheduling with tip reconciliation built into pay',
      'Geo clock-ins tied to billing per event',
      'Top-rated staff surface first for rebooking',
      'Food handler and alcohol service permits tracked with expirations',
    ],
  },
  {
    workforce_type: 'Call Center / BPO Staffing',
    company: {
      name: 'Vantage Contact Solutions',
      founded: 2012,
      parent: null,
      market_position: 'Contact center & back-office BPO staffing',
      footprint: 'US + offshore (Philippines, LatAm), remote & site-based',
    },
    worker_types: ['Temp (campaign)', 'Temp-to-hire', 'Seasonal surge', 'Direct hire', 'Remote / WFH agent'],
    talent_categories: ['Inbound agents', 'Outbound / sales agents', 'Customer support reps', 'Technical support', 'Back-office / data entry', 'Team leads / QA'],
    client_types: ['Telecom / utilities', 'Retail / e-commerce', 'Financial services', 'Healthcare payers', 'SaaS / tech support', 'Government programs'],
    service_models: ['Campaign-based staffing', 'Managed contact center program', 'Ramp / seasonal surge', 'WFM (workforce management) support', 'Payroll & performance reporting'],
    tech_footprint: ['Agent scheduling / WFM tool', 'Client program dashboard', 'Remote clock-in & activity monitor', 'QA / performance scorecards'],
    access_model: ['Agents', 'Client program managers', 'Team leads / site supervisors'],
    compliance: ['Background check', 'I-9 / work authorization', 'PCI-DSS (payment handling)', 'HIPAA (healthcare campaigns)', 'Data security & remote-work policy'],
    narrative: [
      {
        label: 'Business',
        body: "Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",
        tags: ['Campaign staffing', 'Surge ramps', 'On-site + remote', 'Offshore'],
      },
      {
        label: 'Workforce',
        body: 'Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.',
        tags: ['Inbound agents', 'Outbound / sales', 'Tech support', 'Team leads / QA'],
      },
      {
        label: 'Compliance',
        body: "Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",
        tags: ['PCI-DSS', 'HIPAA', 'Background checks', 'I-9'],
      },
    ],
    configured: [
      'Campaign-based scheduling across sites, time zones, and surge ramps',
      'Remote clock-ins and activity tracking for work-from-home agents',
      'PCI and HIPAA requirements tracked per campaign',
      'Background checks and I-9s tracked with expirations',
    ],
  },
];

// Keyword signals per sample (index-aligned with WORKFORCE_SAMPLES). A pasted
// domain is scored against these; the highest-scoring archetype wins. "favorite"
// sits on healthcare so the canonical favoritestaffing.com demo resolves there.
const SAMPLE_KEYWORDS: string[][] = [
  ['favorite', 'health', 'care', 'clinic', 'nurse', 'nursing', 'medical', 'med', 'rn', 'lpn', 'cna', 'hospital', 'hospice', 'allied', 'acacium', 'patient'],
  ['build', 'trade', 'construct', 'electric', 'weld', 'pipefit', 'carpenter', 'hvac', 'contractor', 'mason', 'plumb', 'union', 'skilled', 'labor'],
  ['warehouse', 'logistic', 'pallet', 'fulfillment', 'distribution', 'forklift', '3pl', 'industrial', 'sortation', 'freight', 'supply'],
  ['security', 'guard', 'sentinel', 'patrol', 'protect', 'protection', 'surveillance', 'cctv', 'safe'],
  ['home', 'hearth', 'inhome', 'homecare', 'caregiver', 'companion', 'pca', 'hha', 'senior', 'elder'],
  ['harvest', 'farm', 'field', 'agri', 'agriculture', 'orchard', 'crop', 'grower', 'vineyard', 'seasonal', 'h2a', 'produce'],
  ['hospitality', 'event', 'grand', 'table', 'catering', 'banquet', 'hotel', 'resort', 'restaurant', 'server', 'bartender', 'concierge', 'venue'],
  ['call', 'contact', 'bpo', 'vantage', 'center', 'telecom', 'agent', 'callcenter', 'support', 'outsource'],
];

// Normalise a pasted website to a lowercase host-ish string for keyword matching.
function normalizeSignal(website: string): string {
  const clean = website.trim().toLowerCase().replace(/\s+/g, '');
  const withProto = /^https?:\/\//.test(clean) ? clean : `https://${clean}`;
  try {
    return new URL(withProto).hostname.replace(/^www\./, '');
  } catch {
    return clean;
  }
}

// Small deterministic hash → stable fallback pick when nothing keyword-matches,
// so an unknown domain still lands on the same plausible archetype every run.
function stableIndex(signal: string): number {
  let h = 0;
  for (let i = 0; i < signal.length; i += 1) h = (h * 31 + signal.charCodeAt(i)) >>> 0;
  return h % WORKFORCE_SAMPLES.length;
}

// Match a pasted website to the archetype it most looks like. Scores the domain
// against each archetype's keyword set; ties and no-matches fall back to a stable
// pick so the summary is always populated and deterministic.
export function matchWorkforceSample(website: string): WorkforceSample {
  const signal = normalizeSignal(website);
  let bestIndex = -1;
  let bestScore = 0;
  SAMPLE_KEYWORDS.forEach((keywords, i) => {
    const score = keywords.reduce((n, kw) => (signal.includes(kw) ? n + 1 : n), 0);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  });
  return WORKFORCE_SAMPLES[bestIndex >= 0 ? bestIndex : stableIndex(signal)];
}
