// Landing page content. Structure follows Mubarak's Loom + Google Doc.
// TODOs marked where the client still owes assets/copy.

export const LP = {
  brand: 'Noon Digital',
  email: 'hello@noondigital.net',

  hero: {
    kicker: 'For coaches, consultants & service providers',
    // TODO: client to confirm final headline — this is written in his voice for now
    titleTop: 'Booked calls from',
    titleAccent: 'YouTube search.',
    sub: 'Your buyers are already typing their problems into YouTube. We find those searches, rank you at the top of them, and turn the views into calls on your calendar. One client booked 37 in a month. Zero ad spend.',
    cta: { label: 'Book a free call', href: '#book' },
    socialProof: 'Working with 9+ channels right now',
    avatars: ['/people/face-image11-0.png', '/people/face-image8-0.png', '/people/face-image12-0.png', '/people/face-image19-0.png'],
    chips: [
      { value: '37 calls booked', label: 'from YouTube last month' },
      { value: '120K views', label: 'on a single video' },
    ],
    stats: [
      { value: '9+', label: 'channels worked with' },
      { value: '454K+', label: 'views on one client channel' },
      { value: '37', label: 'calls booked in a month' },
      { value: '4', label: 'buyer keywords ranked top 3' },
    ],
  },

  // TODO: drop the VSL's YouTube ID in here when he sends it
  vsl: {
    youtubeId: '',
    poster: '/images/vsl-poster.webp',
    label: 'Watch this first',
    duration: '9:12',
  },

  // Names + Instagram links are from the doc. Follower counts need a
  // once-over before launch; TikTok/YouTube URLs added where we have them.
  channels: {
    title: 'Channels we\'ve worked with',
    sub: '125K+ subscribers across these channels. Click through and check them yourself.',
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
        role: 'Arabic coach',
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
        avatar: '/people/face-image2-0.png',
        platforms: [
          { p: 'youtube', v: '4.1K', href: null },
          { p: 'instagram', v: '9.3K', href: 'https://www.instagram.com/abu.closing/' },
          { p: 'tiktok', v: '5.6K', href: null },
        ],
      },
      {
        name: 'Ejon',
        role: 'Creator',
        avatar: '/people/face-image4-0.png',
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
        avatar: '/people/face-image7-0.png',
        platforms: [
          { p: 'youtube', v: '5.4K', href: null },
          { p: 'instagram', v: '3.8K', href: 'https://www.instagram.com/faraztutor/' },
          { p: 'tiktok', v: '7.2K', href: null },
        ],
      },
      {
        name: 'I Am Not A Scholar',
        role: 'Podcast',
        avatar: '/people/face-image20-0.png',
        platforms: [
          { p: 'youtube', v: '22.6K', href: null },
          { p: 'instagram', v: '14.1K', href: 'https://www.instagram.com/iamnotascholarpodcast/' },
          { p: 'tiktok', v: '19.5K', href: null },
        ],
      },
    ],
  },

  clientVideos: {
    title: 'Hear it from our clients',
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
        result: '37 calls booked in a month',
        source: 'drive' as const,
        driveId: '1WevLGn4LpUsFDnRJADILJLGIlyHPCLMj',
        title: 'Aqib testimonial',
      },
      {
        name: 'Yaseen',
        role: 'Personal brand',
        result: 'Inbound calls on autopilot',
        source: 'drive' as const,
        driveId: '18Ym5h60DoeFHasZ-z2l9BKatf9ADwmMb',
        title: 'Yaseen testimonial',
      },
    ],
  },

  // Heads up: the doc calls this "£40K" but the screenshot we have says
  // £29,078 — showing the screenshot's number until he sends the other one.
  results: {
    cash: {
      tag: 'Result 01 — Tech sales coach',
      headline: 'Zakariya: £29,078 collected in one quarter, from content',
      value: '£29,078',
      label: 'cash collected in one quarter, from the content',
      points: ['All of it tracked back to the videos', '£0 spent on ads', 'Revenue-share client — we eat what we kill'],
      image: '/assets/chat/chat-revshare.png',
      caption: 'Straight from his messages, June 2026',
      thumbs: ['/images/thumbnails/sm/image2.webp', '/images/thumbnails/sm/image24.webp'],
    },
    calls: {
      tag: 'Result 02 — Appointment setting',
      headline: 'Aqib: 37 calls booked from YouTube in 30 days',
      value: '37',
      label: 'calls booked from YouTube in 30 days',
      points: ['37 of 43 total calls came from YouTube', '31% close rate — they arrive pre-sold', 'Instagram and TikTok booked zero'],
      thumbs: ['/images/thumbnails/sm/image8.webp', '/images/thumbnails/sm/image20.webp'],
      bars: [
        { source: 'YouTube', calls: 37, highlight: true },
        { source: 'Skool', calls: 5, highlight: false },
        { source: 'Referral', calls: 1, highlight: false },
        { source: 'Instagram', calls: 0, highlight: false },
        { source: 'TikTok', calls: 0, highlight: false },
      ],
    },
  },

  // TODO: client sending final process copy — structure mirrors tikscale's
  process: {
    steps: [
      { n: '01', title: 'Research the searches', body: 'We find the exact phrases your buyers type into YouTube, how much demand is behind each one, and which results we can beat.' },
      { n: '02', title: 'Scripting', body: 'Every video scripted before you film — outline or word-for-word, built to rank and to move viewers towards a call.' },
      { n: '03', title: 'Titles & thumbnails', body: 'Packaged to win the click on search results next to channels ten times your size.' },
      { n: '04', title: 'You record', body: 'Roughly two hours a month. We direct you and sort your setup so it looks the part.' },
      { n: '05', title: 'Editing', body: 'Cut for retention, in the style your buyers already watch. You approve, we polish.' },
      { n: '06', title: 'Rank, track, repeat', body: 'We publish, optimise for search, and track which video booked which call — then double down on what\'s working.' },
    ],
  },

  work: {
    note: '17 videos. Every one researched, scripted and shipped by us — press play on any of them.',
    videos: [
      'Q4LY8-JyFUA', 'Bu_zAvyFEDM', 'tye7UE_5fBk', 'E8HAMtD0cUE', '2A9AFwESjtQ',
      'c7k8LqBSJis', 'IwRVFSCIhAo', 'JCKjnCxk3YU', 'vkmbeceHMhE', 't9bUdnjALJU',
      'AwtEaOHg2ao', 'HzprkH0xODk', 'CYDjn709_9A', 'K46lNZjnbzQ', 'QBGUqCAInZk',
      'a15lhPy5ByM', 'j5j5Hz4JXcg',
    ],
  },

  ranking: {
    title: 'Videos ranking on search',
    sub: 'Don\'t take our word for it — search these on YouTube right now.',
    shots: [
      {
        image: '/assets/serp/serp-appointment.png',
        term: 'appointment setting',
        client: 'Aqib, 17K views',
        ring: { left: '1.5%', top: '68.5%', width: '57%', height: '30%' } as null | { left: string; top: string; width: string; height: string },
      },
      {
        image: '/assets/serp/serp-techsales.png',
        term: 'tech sales course',
        client: 'Zakariya, next to Alex Hormozi',
        ring: { left: '2%', top: '70%', width: '50%', height: '29%' } as null | { left: string; top: string; width: string; height: string },
      },
    ],
    terms: [
      { term: 'appointment setting', note: 'Ranking now' },
      { term: 'tech sales course', note: 'Ranking now' },
      { term: 'arabic grammar', note: 'Ranking now' },
      { term: 'miro boards', note: 'Ranking now' },
    ],
  },

  // TODO: client sending a bigger screenshot pack — add files to /assets/proof
  moreProof: {
    title: 'More proof',
    sub: 'Straight out of YouTube Studio.',
    items: [
      { image: '/assets/proof/views-454k.png', caption: '454,684 lifetime views, one channel' },
      { image: '/assets/proof/analytics-arabic.png', caption: 'Arabic channel — search traffic compounding' },
      { image: '/assets/proof/analytics-insight.png', caption: '34.1K views, +1.3K subs from one video' },
      { image: '/assets/proof/analytics-appt.png', caption: '17,232 views on a 7-hour course video' },
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
export type LpPlatform = LpChannel['platforms'][number]['p']
