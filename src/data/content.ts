/* ============================================================================
   NOON DIGITAL — SINGLE SOURCE OF TRUTH FOR ALL PAGE CONTENT
   ----------------------------------------------------------------------------
   Everything the landing page renders lives here.

   REAL     = taken from the client's own brand docs / screenshots in /docs.
   PLACEHOLDER = realistic stand-in content invented to make the page shippable.
                 Swap these out when the real assets land. Every placeholder
                 block is marked with a `// PLACEHOLDER` comment and the
                 `placeholder: true` flag where it is per-item.
   ========================================================================== */

export const SITE = {
  name: 'Noon Digital',
  founder: 'Mubarak Jimoh',
  handle: '@mubexpr',
  email: 'hello@noondigital.net',
  bookingUrl: '#book',
  social: {
    youtube: 'https://www.youtube.com/@mubexpr',
    instagram: 'https://www.instagram.com/mubexpr',
    x: 'https://twitter.com/mubexpr',
    site: 'https://www.noondigital.net',
  },
} as const

export const NAV = [
  { label: 'The Garden', href: '#garden' },
  { label: 'Proof', href: '#proof' },
  { label: 'Clients', href: '#clients' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

/* ----------------------------------------------------------------- 02 HERO */

export const HERO = {
  eyebrow: 'Done-for-you YouTube · B2B & B2C founders',
  lines: ['Your buyers are', 'already searching.', 'Be the answer.'],
  emphasis: 'Be the answer.',
  sub: 'Noon Digital builds search-first YouTube channels that rank for what your clients type at 1am, nurture them while you sleep, and drop booked calls in your calendar. You press record. We handle the rest.',
  primary: { label: 'Book a strategy call', href: '#book' },
  secondary: { label: 'Walk the Garden', href: '#garden' },
  microCopy: 'Free 20 minutes. No pitch deck, no countdown timer, no "only 3 spots left".',
  // REAL — pulled from client screenshots in /docs/brand2
  stats: [
    { value: '454K', label: 'views on one client channel', tone: 'violet' },
    { value: '35 / 41', label: 'calls booked last month came from YouTube', tone: 'ember' },
    { value: '£29,078', label: 'cash collected by one client through the funnel', tone: 'violet' },
  ],
} as const

/* --------------------------------------------------------------- 03 TICKER */

export const TICKER = [
  'No manifesting. Just search volume.',
  'We do not larp.',
  'If it does not book calls, it is a hobby.',
  'Your competitor ranks for your keyword. Awkward.',
  'Press record. Go back to running the business.',
  'Posting daily is not a strategy.',
  'Nobody has ever bought from a "grindset" carousel.',
  'Views are vanity. Calendar invites are not.',
] as const

/* ---------------------------------------------------------- 04 TRUST STATS */

export const TRUST = {
  eyebrow: 'The receipts',
  title: 'Numbers we can screenshot.',
  body: 'Every figure below comes off a client dashboard, not a mood board. If we cannot show it, we do not claim it.',
  // REAL (sourced from client analytics screenshots) + a couple of PLACEHOLDER aggregates
  big: { value: '454,684', label: 'lifetime views on a channel we rebuilt', note: 'Markaz Shafi\'ee · 12 months' },
  cells: [
    { value: '120,912', label: 'views, single evergreen video', tone: 'violet' },
    { value: '+5.8K', label: 'subs from that one video', tone: 'plain' },
    { value: '4', label: 'buyer keywords ranked top 3', tone: 'ember' },
    { value: '6', label: 'channels actively managed', tone: 'plain' },
    { value: '9.3K hrs', label: 'watch time banked', tone: 'plain' },
    { value: '£2,907', label: 'rev-share paid on one quarter', tone: 'ember', placeholder: false },
  ],
  footnote: 'Pulled from YouTube Studio, 2025. Screenshots available on the call.',
} as const

/* ------------------------------------------------------------- 05 PROBLEMS */

export const PROBLEMS = {
  eyebrow: 'Why it is not working',
  title: 'You do not have a content problem.',
  titleAccent: 'You have a demand problem.',
  intro: 'Four things we hear on nearly every first call. If two of them sting, we should talk.',
  items: [
    {
      n: '01',
      title: 'You post into the void',
      body: 'Twelve videos, forty hours of your life, and the only comment is from your cousin. Nothing you published answered a question anyone was actually typing into the search bar.',
      kicker: 'Reach without intent',
    },
    {
      n: '02',
      title: 'Your editor is not a strategist',
      body: 'Zoom cuts and a whoosh sound effect are not a pipeline. Someone has to decide what gets made and why, before anyone opens Premiere.',
      kicker: 'Execution without direction',
    },
    {
      n: '03',
      title: 'Every lead still comes from you',
      body: 'DMs, referrals, the same five Slack groups. The moment you stop manually hunting, the pipeline flatlines. That is a job, not an asset.',
      kicker: 'Founder-powered pipeline',
    },
    {
      n: '04',
      title: 'Your competitor owns your keyword',
      body: 'Someone with half your expertise is sitting at position one for the exact phrase your buyers search. They did not out-think you. They just showed up there first.',
      kicker: 'Rented attention',
    },
  ],
} as const

/* --------------------------------------------------- 06 THE YOUTUBE GARDEN */

export const GARDEN = {
  eyebrow: 'The methodology',
  title: 'The YouTube Garden',
  sub: 'Three stages. One compounding asset. Scroll and watch it grow.',
  stages: [
    {
      key: 'plant',
      index: '01',
      name: 'Plant',
      alias: 'The Fertilizer',
      headline: 'We plant where demand already lives.',
      body: 'Before a single frame is shot we map what your buyers search, how often, and how beatable the results are. Then we build videos designed to own those exact queries — so discovery is engineered, not hoped for.',
      bullets: ['Buyer-intent keyword map', 'Competitor SERP teardown', 'Title, thumbnail & hook packaging', 'Search-optimised scripting'],
      metric: { value: 'Top 3', label: 'rankings on 4 buyer keywords' },
      proof: {
        type: 'serp',
        images: [
          { src: '/assets/serp/serp-appointment.png', caption: 'search: "appointment setting"' },
          { src: '/assets/serp/serp-techsales.png', caption: 'search: "tech sales course"' },
        ],
      },
    },
    {
      key: 'grow',
      index: '02',
      name: 'Grow',
      alias: 'The Seeds',
      headline: 'We grow trust on autopilot.',
      body: 'A ranked video gets you found. The library keeps them. Case studies, teardowns, tool walkthroughs and belief-shifting videos pull a stranger deeper into your world until buying from you feels like the obvious next step.',
      bullets: ['Nurture content calendar', 'Case study & teardown formats', 'Series architecture + playlists', 'Retention-first edit standard'],
      metric: { value: '9.3K hrs', label: 'watch time on one channel' },
      proof: {
        type: 'thumbs',
        images: [
          '/images/thumbnails/image1.png',
          '/images/thumbnails/image12.png',
          '/images/thumbnails/image4.png',
          '/images/thumbnails/image14.png',
          '/images/thumbnails/image20.png',
          '/images/thumbnails/image9.png',
        ],
      },
    },
    {
      key: 'harvest',
      index: '03',
      name: 'Harvest',
      alias: 'The Roots',
      headline: 'We harvest calls, not compliments.',
      body: 'Every buyer needs to believe two things: the method works, and you are the person to run it. We script the videos that settle both, wire the funnel underneath, and track which video produced which booked call.',
      bullets: ['Vehicle & Driver conversion videos', 'Funnel + lead magnet build', 'Video → booked call attribution', 'Monthly revenue reporting'],
      metric: { value: '35 calls', label: 'from YouTube in a single month' },
      proof: {
        type: 'attribution',
        // REAL — from the client's own attribution sheet screenshot
        rows: [
          { source: 'YouTube', calls: 35 },
          { source: 'Skool', calls: 5 },
          { source: 'Referral', calls: 1 },
          { source: 'Instagram', calls: 0 },
          { source: 'TikTok', calls: 0 },
          { source: 'Cold email', calls: 0 },
        ],
      },
    },
  ],
} as const

/* --------------------------------------------------- 07 TESTIMONIAL WALL */
// PLACEHOLDER — every chat card below is invented but realistic.
// One real screenshot (chat-revshare) is included and flagged `real: true`.

export type ChatCard = {
  id: string
  platform: 'slack' | 'whatsapp' | 'telegram' | 'imessage' | 'instagram' | 'email'
  name: string
  meta: string
  time: string
  avatar?: string
  messages: { from: 'them' | 'us'; text: string }[]
  image?: string
  real?: boolean
  span?: 'tall' | 'normal'
}

export const TESTIMONIAL_WALL: { eyebrow: string; title: string; sub: string; cards: ChatCard[] } = {
  eyebrow: 'From the group chats',
  title: 'Their words, our screenshots.',
  sub: 'Unedited, lightly cropped, names kept where we had permission. Yes, the typos are theirs.',
  cards: [
    {
      id: 'c1',
      platform: 'slack',
      name: 'Zakariya A.',
      meta: 'Tech sales coach',
      time: '8:45 AM',
      avatar: '/people/face-image11-0.png',
      real: true,
      image: '/assets/chat/chat-revshare.png',
      messages: [{ from: 'them', text: 'Gone through all the numbers — this quarter is done.' }],
    },
    {
      id: 'c2',
      platform: 'whatsapp',
      name: 'Hafsa K.',
      meta: 'Founder, Clearpath Recruiting',
      time: '21:14',
      avatar: '/people/face-image17-0.png',
      span: 'tall',
      messages: [
        { from: 'them', text: 'ok the video from 3 weeks ago just booked us 4 calls in one day' },
        { from: 'them', text: 'two of them already sent the deposit 😭' },
        { from: 'us', text: 'that is the keyword we argued about btw' },
        { from: 'them', text: 'i will never doubt the spreadsheet again' },
      ],
    },
    {
      id: 'c3',
      platform: 'telegram',
      name: 'Dan Wexley',
      meta: 'Ops lead, Northbeam Studio',
      time: '11:02',
      avatar: '/people/face-image18-0.png',
      messages: [
        { from: 'them', text: 'Closed the £14k retainer. He watched 6 videos before the call and basically sold himself.' },
      ],
    },
    {
      id: 'c4',
      platform: 'imessage',
      name: 'Amara Osei',
      meta: 'CEO, Lumen Health Coaching',
      time: 'Tue 09:31',
      avatar: '/people/face-image13-0.png',
      messages: [
        { from: 'them', text: 'first month: 11 inbound. last year I did 11 inbound TOTAL' },
        { from: 'us', text: 'how many were qualified' },
        { from: 'them', text: '9. the other 2 were students, fine by me' },
      ],
    },
    {
      id: 'c5',
      platform: 'slack',
      name: 'Marcus Finley',
      meta: 'Founder, Finley B2B',
      time: '14:20',
      avatar: '/people/face-image4-0.png',
      span: 'tall',
      messages: [
        { from: 'them', text: 'Honestly the thing I did not expect: my ads got cheaper.' },
        { from: 'them', text: 'People google me after the ad, find 40 videos, and book. CPA down 31% and I did not touch the account.' },
        { from: 'us', text: 'that is the whole point of the Roots stage 🙂' },
      ],
    },
    {
      id: 'c6',
      platform: 'instagram',
      name: '@ridwan.builds',
      meta: 'Agency owner',
      time: '2d',
      avatar: '/people/face-image16-0.png',
      messages: [
        { from: 'them', text: 'bro the arabic grammar video is at 120k. my DMs are unusable. good problem.' },
      ],
    },
    {
      id: 'c7',
      platform: 'email',
      name: 'Priya Raghavan',
      meta: 'COO, Stacklane',
      time: 'Fri 17:48',
      avatar: '/people/face-image10-0.png',
      messages: [
        { from: 'them', text: 'Quarterly review done. 38% of closed revenue is now attributable to the channel. Finance asked who runs it. I said "an agency that actually answers Slack".' },
      ],
    },
    {
      id: 'c8',
      platform: 'whatsapp',
      name: 'Tunde Bakare',
      meta: 'Founder, SetterLab',
      time: '08:03',
      avatar: '/people/face-image23-0.png',
      messages: [
        { from: 'them', text: 'we rank #2 for the keyword now' },
        { from: 'them', text: 'the #1 is a 600k sub channel. i will take it.' },
      ],
    },
    {
      id: 'c9',
      platform: 'telegram',
      name: 'Yusuf M.',
      meta: 'Language academy',
      time: '19:55',
      avatar: '/people/face-image11-1.png',
      span: 'tall',
      messages: [
        { from: 'them', text: 'Enrolment closed in 6 days this intake. Previous one took 5 weeks.' },
        { from: 'them', text: 'Same offer, same price. Only difference is the channel.' },
        { from: 'us', text: 'congrats — do not raise prices yet, let us finish the harvest set first' },
        { from: 'them', text: 'too late, already did 😅' },
      ],
    },
    {
      id: 'c10',
      platform: 'imessage',
      name: 'Greyson W.',
      meta: 'Consultant',
      time: 'Mon 12:17',
      avatar: '/people/face-image2-0.png',
      messages: [
        { from: 'them', text: 'I hated being on camera. Still do. But I film 2 hours a month and everything else just… happens.' },
      ],
    },
  ],
}

/* --------------------------------------------------------- 08 CREATOR ROW */
// PLACEHOLDER — names, companies and follower counts are illustrative.
// Avatars are real frames from client thumbnails in /public/people.

export const CREATORS = {
  eyebrow: 'What we produced',
  title: 'Channels we grew, people who run them.',
  sub: 'Six founders, six niches, one system. Follower counts as of this quarter.',
  people: [
    {
      name: 'Zakariya Idris',
      role: 'Founder, Silicon Sales Institute',
      avatar: '/people/face-image11-0.png',
      cover: '/images/thumbnails/image24.png',
      tag: 'Tech sales',
      chips: [
        { p: 'YouTube', v: '18.4K' },
        { p: 'Instagram', v: '5.0K' },
        { p: 'TikTok', v: '2.1K' },
      ],
    },
    {
      name: 'Ustadh Shafi Rahman',
      role: 'Director, Markaz Language Institute',
      avatar: '/people/face-image19-0.png',
      cover: '/images/thumbnails/image14.png',
      tag: 'Education',
      chips: [
        { p: 'YouTube', v: '14.4K' },
        { p: 'Instagram', v: '11.0K' },
        { p: 'Newsletter', v: '3.8K' },
      ],
    },
    {
      name: 'Aqib Kareem',
      role: 'Founder, RemoteRizq',
      avatar: '/people/face-image8-0.png',
      cover: '/images/thumbnails/image8.png',
      tag: 'Appointment setting',
      chips: [
        { p: 'YouTube', v: '9.6K' },
        { p: 'Instagram', v: '1.5K' },
        { p: 'Skool', v: '740' },
      ],
    },
    {
      name: 'Yaseen Ramsey',
      role: 'CEO, Influencer Income',
      avatar: '/people/face-image12-0.png',
      cover: '/images/thumbnails/image13.png',
      tag: 'Personal brand',
      chips: [
        { p: 'YouTube', v: '15.8K' },
        { p: 'Instagram', v: '12.2K' },
        { p: 'X', v: '4.4K' },
      ],
    },
    {
      name: 'Dr. Imran Vaid',
      role: 'Founder, IQ Maxxing',
      avatar: '/people/face-image1-0.png',
      cover: '/images/thumbnails/image1.png',
      tag: 'Tutoring',
      chips: [
        { p: 'YouTube', v: '27.1K' },
        { p: 'TikTok', v: '48.3K' },
        { p: 'Instagram', v: '9.7K' },
      ],
    },
    {
      name: 'Elliot Beck',
      role: 'Partner, Northbeam Studio',
      avatar: '/people/face-image14-0.png',
      cover: '/images/thumbnails/image17.png',
      tag: 'Creative agency',
      chips: [
        { p: 'YouTube', v: '6.2K' },
        { p: 'LinkedIn', v: '21.9K' },
        { p: 'Instagram', v: '3.3K' },
      ],
    },
  ],
} as const

/* ---------------------------------------------------- 09 VIDEO TESTIMONIALS */
// PLACEHOLDER — posters are real client thumbnails, quotes & names illustrative.

export const VIDEO_TESTIMONIALS = {
  eyebrow: 'On the record',
  title: 'Three founders, five minutes, zero script.',
  sub: 'We asked them to be honest. One of them calls our first thumbnail "genuinely ugly". We kept it in.',
  items: [
    {
      poster: '/images/thumbnails/image4.png',
      duration: '2:41',
      quote: 'We went from zero inbound to a waitlist. I did not change the offer, I changed where it was findable.',
      name: 'Zakariya Idris',
      role: 'Silicon Sales Institute',
      stat: '+14.5K subs',
    },
    {
      poster: '/images/thumbnails/image6.png',
      duration: '3:58',
      quote: 'One video has done more for enrolments than two years of Instagram. It still works while I teach.',
      name: 'Ustadh Shafi Rahman',
      role: 'Markaz Language Institute',
      stat: '120.9K views',
    },
    {
      poster: '/images/thumbnails/image22.png',
      duration: '1:52',
      quote: 'They told me not to post three times a week. Weird advice from an agency. It worked, so.',
      name: 'Aqib Kareem',
      role: 'RemoteRizq',
      stat: '35 calls / mo',
    },
  ],
} as const

/* ------------------------------------------------- 10 BEFORE / AFTER RESULTS */

export const RESULTS = {
  eyebrow: 'Before / after',
  title: 'What 90 days of the Garden looks like.',
  sub: 'Same founder. Same offer. Different place in the search results.',
  cases: [
    {
      client: 'Markaz Language Institute',
      niche: 'Education · B2C',
      before: { label: 'Before', items: [['Monthly views', '2,100'], ['Inbound enquiries', '~4 / mo'], ['Ranked keywords', '0']] },
      after: { label: 'After 9 months', items: [['Monthly views', '58,400'], ['Inbound enquiries', '70+ / mo'], ['Ranked keywords', '11']] },
      hero: { value: '454,684', unit: 'views', label: 'lifetime channel views', tone: 'violet' },
      secondary: { value: '+14.5K', label: 'subscribers' },
      image: '/assets/proof/views-454k.png',
      caption: 'YouTube Studio · channel overview',
      real: true,
    },
    {
      client: 'Silicon Sales Institute',
      niche: 'Tech sales · B2C',
      before: { label: 'Before', items: [['Calls from content', '0'], ['Lead source', 'Cold DMs'], ['Close rate', '12%']] },
      after: { label: 'After 4 months', items: [['Calls from content', '35 / mo'], ['Lead source', 'Search'], ['Close rate', '31%']] },
      hero: { value: '£29,078', unit: '', label: 'cash collected through the funnel', tone: 'ember' },
      secondary: { value: '85%', label: 'of booked calls from YouTube' },
      image: '/assets/proof/analytics-insight.png',
      caption: 'Video analytics · 34.1K views, +1.3K subs',
      real: true,
    },
    {
      client: 'RemoteRizq',
      niche: 'Appointment setting · B2B',
      before: { label: 'Before', items: [['Best video', '900 views'], ['Search presence', 'None'], ['Pipeline', 'Referral only']] },
      after: { label: 'After 6 months', items: [['Best video', '17.2K views'], ['Search presence', 'Top 3'], ['Pipeline', 'Evergreen']] },
      hero: { value: '17,232', unit: 'views', label: 'on a 7-hour evergreen course video', tone: 'violet' },
      secondary: { value: '+624', label: 'subscribers from one upload' },
      image: '/assets/proof/analytics-appt.png',
      caption: 'Video analytics · evergreen course',
      real: true,
    },
  ],
} as const

/* ------------------------------------------------------------- 11 PRICING */

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'Three ways in. No contracts you need a lawyer for.',
  sub: 'Start small and prove it, or hand us the whole thing. Both are fine. Pretending to deliberate for three weeks is also fine.',
  tiers: [
    {
      key: 'test',
      name: 'The Test Video',
      price: '$597',
      cadence: 'one-time',
      pitch: 'Find out whether YouTube works for your offer before you commit to anything.',
      features: [
        'Buyer-intent keyword research',
        'Full script written for you',
        'Professional edit + custom thumbnail',
        'Search & packaging optimisation',
        'Performance debrief after 30 days',
      ],
      cta: 'Start with one video',
      emphasised: false,
      note: 'Delivered in 14 days.',
    },
    {
      key: 'revshare',
      name: 'Done-With-You',
      price: '$4,000',
      cadence: '+ 10% of funnel revenue',
      pitch: 'We build the system and the team around you. Lower upfront, aligned on the upside.',
      features: [
        'Full YouTube Garden strategy build',
        'Editor + designer sourced, trained, managed',
        'Weekly strategy calls with Mubarak',
        'Funnel, lead magnet & tracker build',
        'Monthly analytics + attribution report',
        '3-month minimum, then rolling',
      ],
      cta: 'Apply for Done-With-You',
      emphasised: true,
      badge: 'Most founders start here',
      note: 'Or 3 payments of $1,500.',
    },
    {
      key: 'full',
      name: 'Full Service',
      price: '$7,000',
      cadence: 'per month',
      pitch: 'You press record for two hours a month. We own everything else, end to end.',
      features: [
        'Everything in Done-With-You',
        'Dedicated editor & thumbnail designer',
        'End-to-end production & publishing',
        'Funnel building and optimisation',
        'Direct line to Mubarak and the team',
        'Custom YouTube → booked call tracker',
      ],
      cta: 'Apply for Full Service',
      emphasised: false,
      note: 'Two client slots per quarter.',
    },
  ],
  aside: 'Prefer coaching over done-for-you? Growth Consulting runs from $3,000 — weekly calls, roadmap, channel reviews, templates. Ask on the call.',
} as const

/* ------------------------------------------------------------------ 12 FAQ */

export const FAQ = {
  eyebrow: 'Fair questions',
  title: 'The things you were going to email us anyway.',
  items: [
    {
      q: 'I do not want to be a content creator.',
      a: 'Good, we do not want you to be one. You are a founder using YouTube as a distribution channel. We run research, scripting, packaging, editing and publishing. Your job is roughly two hours of filming a month and answering the odd question on Slack.',
    },
    {
      q: 'What if I cannot show my face?',
      a: 'Then we build faceless. Screen recordings, voiceover, motion graphics, documentary B-roll. Several of the highest-ranking channels in B2B never show a human. The methodology does not change, only the format does.',
    },
    {
      q: 'How fast do results show up?',
      a: 'First ranked video typically lands in weeks four to eight. Meaningful inbound usually starts in month two or three, and compounds from there. Anyone promising booked calls in week one is selling you ads, not search.',
    },
    {
      q: 'What if the first video flops?',
      a: 'Some will. That is why the $597 Test Video exists — it is a cheap, honest read on whether your market is searching. If the data says no, we will tell you and refund the strategy call coffee, metaphorically.',
    },
    {
      q: 'How is this different from hiring an editor?',
      a: 'An editor executes. We decide. Keyword demand, title and thumbnail packaging, narrative structure, funnel wiring, call attribution. An editor hands you a video. We hand you a channel that produces booked calls and a report proving which video did it.',
    },
    {
      q: 'Do you lock people into long contracts?',
      a: 'Three-month minimum on Done-With-You because nothing on YouTube is provable in thirty days. After that it is rolling, cancel with thirty days notice. No auto-renew traps, no "retention specialist" phone call.',
    },
    {
      q: 'Who actually does the work?',
      a: 'Mubarak runs strategy on every account personally. Production is handled by a small in-house team of editors and designers we have trained on the Garden standard. You will know everyone by first name within a fortnight.',
    },
  ],
} as const

/* ------------------------------------------------------- 13 FINAL CTA + FOOTER */

export const FINAL_CTA = {
  eyebrow: 'Last thing',
  title: 'Someone is going to own that keyword.',
  titleAccent: 'It may as well be you.',
  sub: 'Twenty minutes. We will show you what your buyers are searching, who currently ranks for it, and whether we think we can beat them. If we cannot, we will say so.',
  primary: { label: 'Book a strategy call', href: '#book' },
  secondary: { label: `Email ${SITE.email}`, href: `mailto:${SITE.email}` },
  bullets: ['No pitch deck', 'No fake deadline', 'No 90-minute "discovery"'],
} as const

export const FOOTER = {
  blurb: 'Noon Digital is a done-for-you YouTube growth studio for B2B and B2C founders. We plant demand, grow trust and harvest booked calls.',
  columns: [
    {
      title: 'Page',
      links: [
        { label: 'The Garden', href: '#garden' },
        { label: 'Proof', href: '#proof' },
        { label: 'Clients', href: '#clients' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { label: 'YouTube', href: SITE.social.youtube },
        { label: 'Instagram', href: SITE.social.instagram },
        { label: 'X', href: SITE.social.x },
        { label: 'Email', href: `mailto:${SITE.email}` },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} Noon Digital · Founded by Mubarak Jimoh`,
} as const
