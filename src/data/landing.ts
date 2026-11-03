// Landing page content. Structure follows Mubarak's Loom + Google Doc
// ("Landing page", exported with images — see /public/assets).
// TODOs marked where the client still owes assets/copy.

export const LP = {
  brand: 'Noon Digital',
  email: 'hello@noondigital.net',

  hero: {
    kicker: 'For coaches, consultants & service providers',
    // TODO: client to confirm final headline — written in his voice for now
    titleTop: 'Booked calls from',
    titleAccent: 'YouTube search.',
    sub: 'Your buyers are already typing their problems into YouTube. We find those searches, rank you at the top of them, and turn the views into calls on your calendar. One client booked 37 in a month. Zero ad spend.',
    cta: { label: 'Book a free call', href: '#book' },
    socialProof: 'Working with 9+ channels right now',
    avatars: ['/people/avatar-image16.png', '/people/shaf-ig.png', '/people/avatar-image5.png', '/people/avatar-image8.png'],
    chips: [
      { value: '37 calls booked', label: 'from YouTube last month' },
      { value: '237K views', label: 'on a single video' },
    ],
    stats: [
      { value: '9+', label: 'channels worked with' },
      { value: '1M+', label: 'views on one client channel' },
      { value: '37', label: 'calls booked in a month' },
      { value: '6', label: 'buyer keywords ranked top 3' },
    ],
  },

  // Placeholder embed (client's own 209K-view course) until he films the VSL.
  // To swap in the real VSL, replace this ID only.
  vsl: {
    youtubeId: 'Q4LY8-JyFUA',
    poster: '/images/vsl-poster.webp',
    label: 'Watch this first',
    duration: '9:12',
  },

  // IG profile pictures + follower counts are from the Instagram profile
  // screenshots in the client's doc (Nov 2026). Where the doc has no IG
  // screenshot, ig is null — never invent a number.
  // TODO (client): IG counts for Yaseen, Faraz Ali, Mousa, Ejon, Mikail,
  // IANS + profile pics for Mousa, Ejon, Mikail.
  channels: {
    sub: 'Real channels, live now — tap through and check them yourself.',
    people: [
      { name: 'Zakariya', role: 'Tech sales coach', handle: '@zakariya.insight', ig: '5,038', href: 'https://www.instagram.com/zakariya.insight/', avatar: '/people/avatar-image16.png' },
      { name: 'Shaf', role: 'Arabic coach', handle: '@markaz_shafiee', ig: '11K', href: 'https://www.instagram.com/markaz_shafiee/', avatar: '/people/shaf-ig.png' },
      { name: 'Aqib', role: 'Appointment setting coach', handle: '@saleswithaqib', ig: '1,495', href: 'https://www.instagram.com/saleswithaqib/', avatar: '/people/avatar-image5.png' },
      { name: 'Yaseen', role: 'Boxing · personal brand coach', handle: '@yaseenramsey', ig: null, href: 'https://www.instagram.com/yaseenramsey/', avatar: '/people/avatar-image8.png' },
      { name: 'Faraz Ali', role: 'Tutoring', handle: '@faraztutor', ig: null, href: 'https://www.instagram.com/faraztutor/', avatar: '/people/face-image1-0.png' },
      { name: 'Mousa', role: 'Closing coach', handle: '@abu.closing', ig: null, href: 'https://www.instagram.com/abu.closing/', avatar: null },
      { name: 'Ejon', role: 'Creator', handle: '@ejonalex', ig: null, href: 'https://www.instagram.com/ejonalex/', avatar: null },
      { name: 'Mikail', role: 'Creator', handle: '@mikailaminrose', ig: null, href: 'https://www.instagram.com/mikailaminrose/', avatar: null },
      { name: 'I Am Not A Scholar', role: 'Podcast', handle: '@iamnotascholarpodcast', ig: null, href: 'https://www.instagram.com/iamnotascholarpodcast/', avatar: '/people/ians.jpg' },
    ],
  },

  clientVideos: {
    sub: 'Unscripted. We asked, they answered.',
    items: [
      {
        name: 'Shaf',
        role: 'Arabic coach, Markaz Shafi\'ee',
        result: '$16K in 10 days from 5 videos',
        source: 'youtube' as const,
        youtubeId: '-DjhO3maGVA',
        title: 'How This Arabic Coach Made $16K in 10 Days From Just 5 YouTube Videos',
      },
      {
        name: 'Aqib',
        role: 'Appointment setting coach',
        result: '36K views on one course video',
        source: 'drive' as const,
        driveId: '1WevLGn4LpUsFDnRJADILJLGIlyHPCLMj',
        title: 'Aqib testimonial',
      },
      {
        name: 'Yaseen',
        role: 'Personal brand',
        result: '16.6K subs on The Chessboxer',
        source: 'drive' as const,
        driveId: '18Ym5h60DoeFHasZ-z2l9BKatf9ADwmMb',
        title: 'Yaseen testimonial',
      },
    ],
  },

  // Client confirmed the headline figure is USD (Nov 2026). The £29,078 in
  // the bullets is verbatim from Zakariya's DM screenshot on the page.
  results: {
    cash: {
      avatar: '/people/avatar-image16.png',
      name: 'Zakariya',
      meta: 'Tech sales coach · @Zakariya.Tech-Sales',
      chip: 'Cash collected',
      metric: '$40K',
      metricLabel: 'generated from the marketing',
      points: [
        ['£29,078 collected', ' in a single quarter, straight off the back of the videos'],
        ['£0 spent on ads', ' — every lead came from search'],
        ['Revenue-share client', ' — we only earn when he earns'],
        ['Ranking next to Alex Hormozi', ' for "tech sales course" (screenshot further down this page)'],
      ],
      image: '/assets/chat/revshare-40k.webp',
      caption: 'Straight from his messages, June 2026',
    },
    calls: {
      avatar: '/people/shaf-ig.png',
      name: 'Shaf',
      meta: 'Arabic coach · @MarkazShafiee',
      chip: 'Calls booked',
      metric: '37',
      metricSuffix: 'calls / mo',
      metricLabel: 'booked from YouTube in 30 days',
      stats: [
        { v: '37', l: 'calls booked' },
        { v: '47%', l: 'close rate' },
        { v: '25%', l: 'paid in full' },
      ],
      points: [
        ['47% close rate', ' — viewers arrive pre-sold by the videos'],
        ['25% pay in full', ' on the first call'],
        ['Every call tracked', ' back to the video that booked it'],
        ['1M+ channel views', ' so far — subscribers 0 to 21K'],
      ],
      sheet: '/assets/proof/calls-sheet.webp',
      caption: 'His actual tracking sheet',
    },
  },

  // TODO: client sending final process copy — structure mirrors tikscale's
  process: {
    steps: [
      { n: '1', title: 'Research & ideation', body: 'We come up with video ideas that attract your exact buyers — starting with what they\'re already typing into YouTube search.' },
      { n: '2', title: 'Scripting', body: 'We write your script, outline or word-for-word — whatever you\'re more comfortable with. Engineered for watch-time and conversions.' },
      { n: '3', title: 'Direction', body: 'We coach your delivery and make sure your camera setup looks the part. You just talk.' },
      { n: '4', title: 'Editing', body: 'Edited for the highest retention we can get, in the style your buyers already consume.' },
      { n: '5', title: 'Thumbnails', body: 'We design and split-test thumbnail variants to get you the highest click-through rate possible.' },
      { n: '6', title: 'SEO, lead tracking & posting', body: 'We optimise every upload for search, post it for you, and track which video booked which call.' },
    ],
  },

  work: {
    note: '17 videos. Every one researched, scripted and shipped by us — press play on any of them.',
    stats: [
      { v: '1M+', l: 'views on one channel' },
      { v: '237K', l: 'views on a single video' },
      { v: '17', l: 'videos below — all live on YouTube' },
    ],
    // Views pulled from YouTube; outlier = views / channel subscribers
    // (Social Blade). Both checked Nov 2026.
    labels: {
      'Q4LY8-JyFUA': '209K views · 9.9x outlier',
      'Bu_zAvyFEDM': '237K views · 11.2x outlier',
      'tye7UE_5fBk': '99K views · 4.7x outlier',
      'E8HAMtD0cUE': '69K views · 3.3x outlier',
      '2A9AFwESjtQ': '49K views · 2.3x outlier',
      'c7k8LqBSJis': '43K views · 39.9x outlier',
      'IwRVFSCIhAo': '747 views · 0.7x outlier',
      'JCKjnCxk3YU': '56K views · 3.4x outlier',
      'vkmbeceHMhE': '2,566 views · 1.1x outlier',
      't9bUdnjALJU': '8,101 views · 3.6x outlier',
      AwtEaOHg2ao: '36K views · 15.9x outlier',
      'HzprkH0xODk': '1,671 views · 2.7x outlier',
      'CYDjn709_9A': '1,377 views · 2.3x outlier',
      'K46lNZjnbzQ': '2,499 views · 4.1x outlier',
      'QBGUqCAInZk': '1,707 views · 2.8x outlier',
      'a15lhPy5ByM': '10K views · 17.4x outlier',
      'j5j5Hz4JXcg': '1,069 views · 2.0x outlier',
    } as Record<string, string>,
    videos: [
      'Q4LY8-JyFUA', 'Bu_zAvyFEDM', 'tye7UE_5fBk', 'E8HAMtD0cUE', '2A9AFwESjtQ',
      'c7k8LqBSJis', 'IwRVFSCIhAo', 'JCKjnCxk3YU', 'vkmbeceHMhE', 't9bUdnjALJU',
      'AwtEaOHg2ao', 'HzprkH0xODk', 'CYDjn709_9A', 'K46lNZjnbzQ', 'QBGUqCAInZk',
      'a15lhPy5ByM', 'j5j5Hz4JXcg',
    ],
  },

  // SERP screenshots pulled from the client's doc (+ 2 already in the repo).
  // `ring` = highlight box over our client's result, % of the image.
  ranking: {
    sub: 'Don\'t take our word for it — search these on YouTube right now.',
    shots: [
      {
        image: '/assets/serp/serp-arabic-grammar-course.webp',
        term: 'arabic grammar course',
        client: 'Shaf — 201K views',
        ring: { left: '3%', top: '39%', width: '46.5%', height: '33%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-arabic-grammar.webp',
        term: 'arabic grammar',
        client: 'Shaf — 201K views',
        ring: { left: '2%', top: '58.5%', width: '31%', height: '39.5%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-miro.webp',
        term: 'how to make instagram miro boards',
        client: 'Muba — ranking #1',
        ring: { left: '2%', top: '10.5%', width: '30%', height: '35%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-appointment.png',
        term: 'appointment setting',
        client: 'Aqib — 17K views',
        ring: { left: '1.5%', top: '68.5%', width: '57%', height: '30%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-arabic-verbs.webp',
        term: 'arabic verb forms',
        client: 'Shaf — ranking #1',
        ring: { left: '2%', top: '11%', width: '31%', height: '37.5%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-techsales.png',
        term: 'tech sales course',
        client: 'Zakariya — next to Alex Hormozi',
        ring: { left: '2%', top: '70%', width: '50%', height: '29%' } as null | { left: string; top: string; width: string; height: string },
      },
    ],
    terms: [
      { term: 'arabic grammar course', note: 'Ranking now' },
      { term: 'arabic grammar', note: 'Ranking now' },
      { term: 'appointment setting', note: 'Ranking now' },
      { term: 'tech sales course', note: 'Ranking now' },
      { term: 'arabic verb forms', note: 'Ranking now' },
      { term: 'how to make instagram miro boards', note: 'Ranking now' },
    ],
  },

  // TODO: client sending a bigger screenshot pack — add files to /assets/proof
  moreProof: {
    sub: 'Straight out of YouTube Studio and the tracking sheets.',
    items: [
      { image: '/assets/proof/views-454k.png', caption: '454,684 lifetime views, one channel', wide: true },
      { image: '/assets/proof/dm-leads.webp', caption: 'One Miro video filled the inbox with leads', wide: false },
      { image: '/assets/proof/calls-july.webp', caption: 'Calls by source — YouTube 35, everything else 6', wide: false },
      { image: '/assets/proof/analytics-arabic.png', caption: 'Arabic channel — search traffic compounding', wide: false },
      { image: '/assets/proof/calls-sheet.webp', caption: '37 calls · 47% close rate · 25% paid in full', wide: true },
      { image: '/assets/proof/analytics-insight.png', caption: '34.1K views, +1.3K subs from one video', wide: false },
      { image: '/assets/proof/analytics-appt.png', caption: '17,232 views on a 7-hour course video', wide: false },
      { image: '/assets/proof/analytics-45k.webp', caption: '45,191 views, +1.3K subscribers — one video', wide: false },
    ],
  },

  book: {
    title: 'Your buyers are searching. Be the video they find.',
    sub: 'Book a free 20-minute call. We\'ll pull up what your buyers search, who ranks for it, and tell you straight whether we can beat them.',
    cta: 'Book your free call',
    embedUrl: '', // TODO: paste Cal.com/Calendly embed URL
  },

  footer: {
    blurb: 'Done-for-you YouTube for coaches, consultants and service providers. Rank for what your buyers already search.',
    links: [
      { label: 'Channels', href: '#channels' },
      { label: 'Clients', href: '#clients' },
      { label: 'Results', href: '#results' },
      { label: 'Process', href: '#process' },
      { label: 'Our work', href: '#work' },
      { label: 'Book a call', href: '#book' },
    ],
  },
} as const

export type LpChannel = (typeof LP.channels.people)[number]
export type LpPlatform = 'youtube' | 'instagram' | 'tiktok'
