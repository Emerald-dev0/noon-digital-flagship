export const SITE = {
  name: 'Noon Digital',
  founder: 'Mubarak Jimoh',
  handle: '@mubexpr',
  tagline: 'I help b2b or b2c businesses scale and sign more clients through YouTube',
  description: 'The YouTube Garden — demand-first content that ranks, nurtures, and converts.',
  email: 'hello@noondigital.co',
  social: {
    youtube: 'https://www.youtube.com/@mubexpr',
    twitter: 'https://twitter.com/mubexpr',
    linkedin: 'https://linkedin.com/company/noondigital',
    instagram: 'https://www.instagram.com/mubexpr',
    website: 'https://www.noondigital.net',
  },
} as const;

export const NAV_LINKS = [
  { label: 'The Garden', href: '/garden' },
  { label: 'Services', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;

export const ACT_TITLES = {
  one: {
    tagline: 'The Problem',
    headline: 'Your content is invisible.',
    subheadline: '358 subscribers. 0 booked calls. Sound familiar?',
    mirror: "I was editing for a sales coach. Begged for a shot. Closed for 3 months. Then an accident took it all. I went back to editing. Built content strategies. Then YouTube strategy — and everything changed.",
    cta: 'Meet Mubarak',
    ctaSecondary: 'See the Garden',
  },
  two: {
    tagline: 'The Shift',
    headline: 'The YouTube Garden™',
    subheadline: 'Demand-first content. Rank where buyers are searching. Nurture trust. Convert to clients.',
    tagline2: 'Search these terms and find our clients in the top 3:',
    searches: [
      'Appointment Setting',
      'Tech Sales Course',
      'How To Make Miro Boards',
      'Arabic Grammar For Beginners',
    ],
    pillar1: 'The Fertilizer',
    pillar1desc: 'Find demand that already exists. Build content around what your ideal clients are searching for.',
    pillar2: 'The Seeds',
    pillar2desc: 'Strategically guide viewers deeper into your content ecosystem. Case studies, tutorials, frameworks.',
    pillar3: 'The Roots',
    pillar3desc: 'Convert through belief. Sell the Vehicle (the model works) and the Driver (you can help them).',
    pillars: 'Why YouTube Changes Everything',
    why1: 'Your ads convert better — YouTube builds trust post-click.',
    why2: 'Referrals close faster — 30 min of content = pre-sold.',
    why3: 'Prices go up — visible authority = pricing power.',
    why4: 'Recruiting gets easier — team watches content before joining.',
    why5: 'Content never expires — compound asset vs. 48hr Instagram half-life.',
    cta: 'See the System',
  },
  three: {
    tagline: 'The System',
    headline: 'The YouTube Garden',
    subheadline: 'Search-first discovery. Ecosystem nurture. Conversion architecture.',
    fertilizerTitle: 'The Fertilizer',
    fertilizerDesc: 'Most agencies create content and hope it gets discovered. We start by finding demand that already exists.',
    fertilizerProof: 'Before creating a single video, we identify what your ideal clients are actively searching for — and rank for it.',
    seedsTitle: 'The Seeds',
    seedsDesc: 'Getting found is only half the battle. Once prospects discover your channel, we guide them deeper.',
    seedsTypes: 'Case Studies, How-To Videos, Software Tutorials, Belief Shifting, Framework Breakdowns, Industry Commentary, Lead Magnets',
    rootsTitle: 'The Roots',
    rootsDesc: 'Before someone buys, they only need to believe two things:',
    rootsVehicle: 'The Vehicle — the business model works',
    rootsDriver: 'The Driver — the person behind the method can help them',
    rootsWhy: 'Most prospects don\'t buy because they don\'t believe the method works or the teacher can help. Roots solve both.',
    cta: 'Watch the Garden Grow',
  },
  four: {
    tagline: 'The Proof',
    headline: 'Real channels. Real results.',
    subheadline: 'Six client channels. Five pillars of compounding growth.',
    stats: [
      { value: '6', label: 'Active Client Channels' },
      { value: '358', label: 'Founder Subs (growing)' },
      { value: '4', label: 'Verified Ranking Terms' },
      { value: '60min', label: 'Avg. Sales Call' },
    ],
    channelsLabel: 'Live Client Channels',
    cta: 'Work With Mubarak',
  },
  five: {
    tagline: 'Investment',
    headline: 'Choose your entry point.',
    subheadline: 'No long-term contracts. No hype. Just results.',
  },
} as const;

export const OFFERS = {
  testVideo: {
    name: 'YouTube Test Video',
    price: '597',
    tagline: 'Validate YouTube as a client acquisition channel',
    features: [
      'Market research & topic selection',
      'Full script writing',
      'Professional video editing',
      'Custom thumbnail design',
      'YouTube SEO optimization',
    ],
    popular: false,
  },
  growthConsulting: {
    name: 'Growth Consulting',
    price: 'From $3,000',
    tagline: 'Done-with-you guidance. Execute, we consult.',
    features: [
      'Weekly 1-on-1 Strategy Calls',
      'Content Roadmap',
      'Channel Reviews',
      'Packaging Feedback',
      'Content Strategy',
      'Talent Placement',
      'Funnel Guidance',
      'All Training Modules',
      'All AI Templates',
    ],
    popular: false,
  },
  dwRevenueShare: {
    name: 'Done-With-You Revenue Share',
    price: 'From $4,000 + 10% rev share',
    tagline: 'Lower upfront cost + revenue share. We source, train, and manage your team.',
    features: [
      'Everything in Growth Consulting',
      '10% of cash collected through YouTube funnel',
      'Editor & designer sourced by us',
      'Weekly strategy calls',
      'Monthly analytics reports',
      '3-month minimum commitment',
    ],
    popular: true,
  },
  fullService: {
    name: 'Full Service',
    price: 'From $7,000',
    tagline: 'We handle everything. You press record.',
    features: [
      'Everything in Revenue Share',
      'Dedicated editor & designer',
      'End-to-end production',
      'Funnel building & optimization',
      'Direct access to Mubarak & team',
      'Custom YouTube → Booked Calls Tracker',
      'Recording & Delivery Consulting',
    ],
    popular: false,
  },
  tiers: [
    { key: 'testVideo', label: 'YouTube Test Video', price: '597', period: 'one-time', description: 'Validate YouTube as a client acquisition channel. One video, full process, results.', features: ['Market research & topic selection', 'Full script writing', 'Professional video editing', 'Custom thumbnail design', 'YouTube SEO optimization'], cta: 'Get Test Video', popular: false },
    { key: 'growthConsulting', price: '3,000', period: 'paid in full', periodAlt: '6 payments of 600', description: 'Done-with-you guidance. Execute, we consult.', features: ['Weekly 1-on-1 Strategy Calls', 'Content Roadmap', 'Channel Reviews', 'Packaging Feedback', 'Content Strategy', 'Talent Placement', 'Funnel Guidance', 'All Training Modules', 'All AI Templates'], cta: 'Apply Now', popular: false },
    { key: 'dwRevenueShare', price: '4,000', period: 'paid in full', periodAlt: '3 payments of 1,500', description: 'Lower upfront cost + 10% rev share. We source, train, manage your team.', features: ['Everything in Growth Consulting', '10% of cash collected through YouTube funnel', 'Editor & designer sourced by us', 'Weekly strategy calls', 'Monthly analytics reports', '3-month minimum'], cta: 'Apply Now', popular: true },
    { key: 'fullService', price: '7,000', period: 'paid in full', periodAlt: '3 payments of 2,500', description: 'We handle everything. You press record.', features: ['Everything in Revenue Share', 'Dedicated editor & designer', 'End-to-end production', 'Funnel building & optimization', 'Direct access to Mubarak & team', 'Custom YouTube → Booked Calls Tracker', 'Recording & Delivery Consulting'], cta: 'Apply Now', popular: false },
  ],
} as const;

export const CLIENT_CHANNELS = [
  { name: 'Appointment Clicks', url: 'https://youtube.com/@AppointmentClicks', subscribers: '12K+', description: 'B2B appointment setting and sales development' },
  { name: 'Tech Sales Mentor', url: 'https://youtube.com/@TechSalesMentor', subscribers: '8.5K+', description: 'Tech sales career growth and strategies' },
  { name: 'Miro Boards', url: 'https://youtube.com/@MiroBoardsForInstagram', subscribers: '15K+', description: 'Visual collaboration and Miro tutorials' },
  { name: 'Arabic Grammar', url: 'https://youtube.com/@ArabicGrammarForBeginners', subscribers: '6K+', description: 'Beginner-friendly Arabic language lessons' },
] as const;

export const RANKING_TERMS = [
  { term: 'appointment setting', position: 1, url: 'youtube.com/@AppointmentClicks' },
  { term: 'tech sales course', position: 2, url: 'youtube.com/@TechSalesMentor' },
  { term: 'miro boards for instagram', position: 1, url: 'youtube.com/@MiroBoardsForInstagram' },
  { term: 'arabic grammar for beginners', position: 3, url: 'youtube.com/@ArabicGrammarForBeginners' },
] as const;

export const FOUNDER_STORY = {
  name: 'Mubarak Jimoh',
  origin: 'Started editing. First client was a sales coach. Consumed his course. Begged for an opportunity. Got put on a content agency offer. Closed for 3 months. Had an accident. Went back to editing. Built IG content strategy. Then YouTube strategy. Everything changed.',
  catalyst: 'Sick of not having money to do shit.',
  now: 'Running an agency with multiple clients. Helping businesses scale through YouTube.',
  values: 'Honesty, transparency, work no matter what.',
  voice: 'Results guy. Doesn\'t larp or chat shit. Just gets to work. Funny guy.',
} as const;

export const COMPETITORS = [
  { name: 'Jake Trinder', handle: '@jaketrinder', niche: 'Tech sales' },
  { name: 'Steven Baterina', handle: '@stevenbaterina', niche: 'Tech sales' },
  { name: 'Ayman Arab', handle: '@theaymanarab', niche: 'Tech sales' },
  { name: 'Nate Nkgwn', handle: '@natenkgwn', niche: 'Tech sales' },
  { name: 'Linden Chasteen', handle: '@lindenchasteenyt', niche: 'Tech sales' },
] as const;

export const FAQ = {
  label: 'Friction Points',
  headline: 'Questions worth answering.',
  subheadline: 'The objections we hear — and how Mubarak handles them.',
  items: [
    {
      question: 'I don\'t want to be a content creator.',
      answer: 'You won\'t be. You\'re a business owner using YouTube as a lever. Mubarak handles strategy, research, scripting, editing, and packaging. You record — that\'s it.',
    },
    {
      question: 'I can\'t show my face.',
      answer: 'Mubarak builds high-converting faceless channels using screen recordings, motion graphics, and voiceover. Dense, valuable content — not a face.',
    },
    {
      question: 'Is this halal?',
      answer: 'Absolutely. Mubarak speaks about his Islam openly. Content is transparent, honest, and rooted in real values. No manipulation, no hype.',
    },
    {
      question: 'What if the first video doesn\'t work?',
      answer: 'Start with the YouTube Test Video ($597). It validates the approach before committing. No risk.',
    },
    {
      question: 'Is this just selling?',
      answer: 'No. It\'s educating. By solving specific problems for your ideal client on YouTube, you build goodwill. When they\'re ready to buy, you\'re the only logical choice.',
    },
    {
      question: 'How is this different from hiring a video editor?',
      answer: 'An editor edits. Mubarak engineers. The system covers strategy, scripting, SEO, thumbnails, funnels, and conversion optimization. An editor gives you a video. Mubarak gives you a client acquisition engine.',
    },
  ],
} as const;

export const CTA = {
  headline: 'Still thinking about it?',
  subheadline: 'The best time to start was yesterday. The second best time is now.',
  cta: 'Book a Strategy Call',
  micro: 'No commitment. No sales pitch. Just a 15-minute strategy conversation with Mubarak.',
} as const;

export const FOOTER = {
  brand: 'The YouTube Garden™. Helping coaches, consultants, and agencies scale through search-first YouTube content.',
  columns: [
    {
      title: 'Navigate',
      links: [
        { label: 'The Garden', href: '#garden' },
        { label: 'Channels', href: '#channels' },
        { label: 'Why YouTube', href: '#why' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'YouTube', href: 'https://www.youtube.com/@mubexpr' },
        { label: 'Instagram', href: 'https://www.instagram.com/mubexpr' },
        { label: 'Twitter', href: 'https://twitter.com/mubexpr' },
        { label: 'Email', href: 'mailto:hello@noondigital.co' },
      ],
    },
  ],
  bottom: '© 2024 · Noon Digital · Founded by Mubarak Jimoh',
  socs: [
    { label: 'YouTube', href: 'https://www.youtube.com/@mubexpr' },
    { label: 'Instagram', href: 'https://www.instagram.com/mubexpr' },
    { label: 'Twitter', href: 'https://twitter.com/mubexpr' },
  ],
} as const;
