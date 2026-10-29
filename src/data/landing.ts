/* ============================================================================
   NOON DIGITAL — VSL LANDING PAGE CONTENT (single source of truth)
   ----------------------------------------------------------------------------
   Structure + assets taken 1:1 from the client's Google Doc brief
   ("Landing page" — doc shared by Mubarak) and his Loom walkthrough.

   REAL        = from the doc / verified in-repo assets.
   PLACEHOLDER = stand-in the client still owes us (copy, VSL, screenshots,
                 follower counts). Every placeholder is marked.

   Design reference: dahusdigital.com (overall look).
   Per-section inspo from the doc:
     Channels  → viralbangers.com / creosocial.net
     Results   → viralbangers.com
     Process   → tikscale.net
     Work      → clipcut.com
     Ranking   → clipcut.com
     MoreProof → viewstoclients.com
   ========================================================================== */

export const LP = {
  brand: 'Noon Digital',
  email: 'hello@noondigital.net',

  /* ------------------------------------------------------------- HERO / VSL */
  hero: {
    // REAL — from the doc headline
    eyebrow: 'For Coaches, Consultants & Service Providers',
    // PLACEHOLDER — doc literally says "We Will…" (client to finish the line).
    // Drafted in his voice so the page ships; swap when final copy lands.
    titleA: 'We Will Build You A YouTube Channel That',
    titleAccent: 'Books Calls While You Sleep',
    sub: 'Watch the breakdown below to see how we turn YouTube search into booked calls for coaches, consultants and service providers — without you becoming a full-time content creator.',
    cta: { label: 'Book Your Free Call', href: '#book' },
    ctaNote: 'Free 20-min strategy call · No pitch deck · No pressure',
    // dahus-style stat band — numbers grounded in repo proof + the doc
    stats: [
      { value: '9+', label: 'channels we\'ve worked with' },
      { value: '454K+', label: 'views generated on one channel' },
      { value: '37', label: 'calls booked from YouTube in a month' },
    ],
  },

  /* PLACEHOLDER — paste the VSL's YouTube ID here when the client sends it.
     Leave empty and the player frame renders as a "coming soon" slot. */
  vsl: {
    youtubeId: '',
    label: 'Watch this first',
    duration: '—',
  },

  /* ------------------------------------------- CHANNELS WE'VE WORKED WITH */
  channels: {
    eyebrow: 'Proof of work',
    title: 'Channels We\'ve Worked With',
    sub: 'Real channels, real audiences. Tap any profile and go look for yourself.',
    /* REAL: names + Instagram links are 1:1 from the Google Doc.
       REAL: YouTube links for Zak / Shaf / Aqib / Yaseen verified in repo data.
       PLACEHOLDER: follower counts (verify live numbers before launch) and
       avatars for Mousa / Ejon / Faraz Ali / the podcast (cropped from client
       thumbnails already in /public/people — confirm they're the right faces).
       TikTok/YouTube links the client didn't give us are left as null. */
    people: [
      {
        name: 'Zak',
        role: 'Tech sales coach',
        avatar: '/people/face-image11-0.png',
        platforms: [
          { p: 'youtube', v: '18.4K', href: 'https://www.youtube.com/@Zakariya.Tech-Sales' },
          { p: 'instagram', v: '5.0K', href: 'https://www.instagram.com/zakariya.insight/' },
          { p: 'tiktok', v: '2.1K', href: null },
        ],
      },
      {
        name: 'Shaf',
        role: 'Arabic language coach',
        avatar: '/people/face-image19-0.png',
        platforms: [
          { p: 'youtube', v: '14.4K', href: 'https://www.youtube.com/@MarkazShafiee' },
          { p: 'instagram', v: '11.0K', href: 'https://www.instagram.com/markaz_shafiee/' },
          { p: 'tiktok', v: '6.8K', href: null },
        ],
      },
      {
        name: 'Aqib',
        role: 'Appointment setting',
        avatar: '/people/face-image8-0.png',
        platforms: [
          { p: 'youtube', v: '9.6K', href: 'https://www.youtube.com/@SaleswithAqib' },
          { p: 'instagram', v: '1.5K', href: 'https://www.instagram.com/saleswithaqib/' },
          { p: 'tiktok', v: '3.2K', href: null },
        ],
      },
      {
        name: 'Yaseen',
        role: 'Personal brand',
        avatar: '/people/face-image12-0.png',
        platforms: [
          { p: 'youtube', v: '15.8K', href: 'https://www.youtube.com/@yaseenramsey' },
          { p: 'instagram', v: '12.2K', href: 'https://www.instagram.com/yaseenramsey/' },
          { p: 'tiktok', v: '8.4K', href: null },
        ],
      },
      {
        name: 'Mousa',
        role: 'Closing coach',
        avatar: '/people/face-image2-0.png', // PLACEHOLDER face
        platforms: [
          { p: 'youtube', v: '4.1K', href: null },
          { p: 'instagram', v: '9.3K', href: 'https://www.instagram.com/abu.closing/' },
          { p: 'tiktok', v: '5.6K', href: null },
        ],
      },
      {
        name: 'Ejon',
        role: 'Creator',
        avatar: '/people/face-image4-0.png', // PLACEHOLDER face
        platforms: [
          { p: 'youtube', v: '7.7K', href: null },
          { p: 'instagram', v: '6.1K', href: 'https://www.instagram.com/ejonalex/' },
          { p: 'tiktok', v: '11.9K', href: null },
        ],
      },
      {
        name: 'Mikail',
        role: 'Creator',
        avatar: '/people/face-image1-0.png',
        platforms: [
          { p: 'youtube', v: '27.1K', href: 'https://www.youtube.com/@yaseenbiz' },
          { p: 'instagram', v: '9.7K', href: 'https://www.instagram.com/mikailaminrose/' },
          { p: 'tiktok', v: '48.3K', href: null },
        ],
      },
      {
        name: 'Faraz Ali',
        role: 'Tutoring',
        avatar: '/people/face-image7-0.png', // PLACEHOLDER face
        platforms: [
          { p: 'youtube', v: '5.4K', href: null },
          { p: 'instagram', v: '3.8K', href: 'https://www.instagram.com/faraztutor/' },
          { p: 'tiktok', v: '7.2K', href: null },
        ],
      },
      {
        name: 'I Am Not A Scholar',
        role: 'Podcast',
        avatar: '/people/face-image20-0.png', // PLACEHOLDER face
        platforms: [
          { p: 'youtube', v: '22.6K', href: null },
          { p: 'instagram', v: '14.1K', href: 'https://www.instagram.com/iamnotascholarpodcast/' },
          { p: 'tiktok', v: '19.5K', href: null },
        ],
      },
    ],
  },

  /* ------------------------------------------------ HEAR FROM OUR CLIENTS */
  clientVideos: {
    eyebrow: 'Testimonials',
    title: 'Hear It Directly From Our Clients',
    sub: 'No scripts, no actors. Just clients explaining what happened after we took over their YouTube.',
    // REAL — video links 1:1 from the Google Doc
    items: [
      {
        name: 'Shaf',
        role: 'Arabic Coach · Markaz Shafi\'ee',
        result: '$16K in 10 days from 5 videos',
        source: 'youtube' as const,
        youtubeId: '-DjhO3maGVA',
        title: 'How This Arabic Coach Made $16K in 10 Days From Just 5 YouTube Videos',
      },
      {
        name: 'Aqib',
        role: 'Appointment Setting Coach',
        result: '37 calls booked in a month',
        source: 'drive' as const,
        driveId: '1WevLGn4LpUsFDnRJADILJLGIlyHPCLMj',
        title: 'Aqib — Client Testimonial',
      },
      {
        name: 'Yaseen',
        role: 'Personal Brand',
        result: 'Channel turned into an inbound pipeline',
        source: 'drive' as const,
        driveId: '18Ym5h60DoeFHasZ-z2l9BKatf9ADwmMb',
        title: 'Yaseen — Client Testimonial',
      },
    ],
  },

  /* ---------------------------------------------------------------- RESULTS */
  results: {
    eyebrow: 'Results',
    title: 'Results Speak For Themselves',
    sub: 'Screenshots over slogans. This is what the system produces.',
    /* NOTE FOR REVIEW: the doc labels this result "£40K From The Marketing"
       but the only matching screenshot in the repo (the Zakariya DM) shows
       £29,078 collected. We display the screenshot's own number. If the
       client sends the £40K screenshot, swap `image` + `value` here.
       The "your 10% is £2,907.80" part is blurred in the UI per his Loom. */
    cash: {
      value: '£29,078',
      label: 'cash collected by one client — from the content alone',
      client: 'Zakariya · Tech Sales Coach',
      image: '/assets/chat/chat-revshare.png',
      caption: 'Actual client message · sensitive detail blurred',
    },
    /* REAL per doc: "37 Calls Booked From YouTube In A Month".
       Client said on the Loom we can design this instead of using the raw
       screenshot — so this is a designed card, numbers from his attribution. */
    calls: {
      value: '37',
      label: 'calls booked from YouTube in a single month',
      client: 'One client channel · last 30 days',
      share: '85%+ of every call booked that month came from YouTube',
      bars: [
        { source: 'YouTube', calls: 37, highlight: true },
        { source: 'Skool', calls: 5, highlight: false },
        { source: 'Referral', calls: 1, highlight: false },
        { source: 'Instagram', calls: 0, highlight: false },
        { source: 'TikTok', calls: 0, highlight: false },
      ],
    },
  },

  /* --------------------------------------------------------------- PROCESS */
  /* PLACEHOLDER copy — client said "I'll give you the copy, for now just do
     the placeholder". Kept short + simple like tikscale.net. */
  process: {
    eyebrow: 'How it works',
    title: 'Our Process Is Simple',
    sub: 'Four steps. You talk, we build the machine around you.',
    steps: [
      {
        n: '01',
        title: 'We Find What Your Buyers Search',
        body: 'We research the exact phrases your ideal clients type into YouTube and map the demand nobody in your niche is serving.',
      },
      {
        n: '02',
        title: 'We Script & Package Every Video',
        body: 'Titles, thumbnails, hooks and full scripts — engineered to rank on search and turn viewers into booked calls.',
      },
      {
        n: '03',
        title: 'You Record. We Handle The Rest',
        body: 'Around two hours of filming a month from you. Editing, publishing and optimisation is all on us.',
      },
      {
        n: '04',
        title: 'Videos Rank. Calls Get Booked',
        body: 'Your videos sit at the top of search, working every day. We track which video produced which call, so you see exactly what\'s paying you back.',
      },
    ],
    cta: { label: 'Start With Step 1 — Book A Call', href: '#book' },
  },

  /* ---------------------------------------------------------------- WORK */
  work: {
    eyebrow: 'Portfolio',
    title: 'Our Work',
    sub: 'Real videos we strategised, scripted and shipped for client channels. Press play on any of them.',
    // REAL — all 17 video IDs 1:1 from the Google Doc, in doc order
    videos: [
      'Q4LY8-JyFUA',
      'Bu_zAvyFEDM',
      'tye7UE_5fBk',
      'E8HAMtD0cUE',
      '2A9AFwESjtQ',
      'c7k8LqBSJis',
      'IwRVFSCIhAo',
      'JCKjnCxk3YU',
      'vkmbeceHMhE',
      't9bUdnjALJU',
      'AwtEaOHg2ao',
      'HzprkH0xODk',
      'CYDjn709_9A',
      'K46lNZjnbzQ',
      'QBGUqCAInZk',
      'a15lhPy5ByM',
      'j5j5Hz4JXcg',
    ],
  },

  /* ------------------------------------------------------- RANKING ON SEARCH */
  ranking: {
    eyebrow: 'Search domination',
    title: 'Our Videos Rank On Search',
    sub: 'Don\'t take our word for it — open YouTube and search these terms yourself. Our clients are sitting at the top.',
    shots: [
      {
        image: '/assets/serp/serp-appointment.png',
        term: 'appointment setting',
        client: 'Aqib — 17K views',
        // highlight ring around our client's result in the screenshot (%)
        ring: { left: '1.5%', top: '68.5%', width: '57%', height: '30%' },
      },
      {
        image: '/assets/serp/serp-techsales.png',
        term: 'tech sales course',
        client: 'Zakariya — sitting under Alex Hormozi',
        ring: { left: '2%', top: '70%', width: '50%', height: '29%' } as null | { left: string; top: string; width: string; height: string },
      },
    ],
    // extra ranked terms from the client's own docs — live "go check" links
    terms: [
      { term: 'appointment setting', note: 'Aqib · ranking now' },
      { term: 'tech sales course', note: 'Zakariya · ranking now' },
      { term: 'arabic grammar', note: 'Shaf · ranking now' },
      { term: 'miro boards', note: 'Client channel · ranking now' },
    ],
  },

  /* ------------------------------------------------------------- MORE PROOF */
  /* Client is sending a bigger screenshot pack later ("I'll put that together
     and do it for you") — drop new files in /public/assets/proof and add them
     here. These four are REAL analytics screenshots already in the repo. */
  moreProof: {
    eyebrow: 'The receipts',
    title: 'More Proof',
    sub: 'Straight out of YouTube Studio. No cropping games, no cherry-picked angles.',
    items: [
      { image: '/assets/proof/views-454k.png', caption: '454,684 lifetime views — one client channel' },
      { image: '/assets/proof/analytics-arabic.png', caption: 'Arabic coach — evergreen search traffic' },
      { image: '/assets/proof/analytics-insight.png', caption: '34.1K views · +1.3K subs from one video' },
      { image: '/assets/proof/analytics-appt.png', caption: '17,232 views on a 7-hour course video' },
    ],
  },

  /* ------------------------------------------------------------ BOOK / CTA */
  book: {
    eyebrow: 'Next step',
    title: 'Ready To Own Your Search Terms?',
    sub: 'Book a free 20-minute call. We\'ll show you what your buyers are searching, who ranks for it right now, and whether we can beat them. If we can\'t, we\'ll tell you on the call.',
    bullets: ['Free 20 minutes', 'Your keyword map, live', 'Zero pressure to buy'],
    /* PLACEHOLDER — paste the client's Cal.com / Calendly embed URL here.
       Empty = styled fallback card with an email CTA. */
    embedUrl: '',
    fallbackNote: 'Calendar loading soon — in the meantime, grab a slot by email:',
  },

  footer: {
    blurb: 'Done-for-you YouTube growth for coaches, consultants and service providers. We rank you for what your buyers already search.',
    links: [
      { label: 'Channels', href: '#channels' },
      { label: 'Clients', href: '#clients' },
      { label: 'Results', href: '#results' },
      { label: 'Process', href: '#process' },
      { label: 'Our Work', href: '#work' },
      { label: 'Book a call', href: '#book' },
    ],
  },
} as const

export type LpChannel = (typeof LP.channels.people)[number]
export type LpPlatform = LpChannel['platforms'][number]['p']
