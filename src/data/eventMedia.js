/**
 * Independence Trade Show 2026 & Hero Video Highlights Data Configuration
 * 
 * Update video file paths, poster images, titles, and links in this central file.
 * Changes here will automatically update the Home Page and Gallery Page components.
 */

// 1. Top 3 Video Showcase Cards (Rendered right below the Hero Section)
export const heroVideoHighlights = [
  {
    id: "hero-vid-1",
    title: "Grill Wars",
    count: "October Highlights",
    video: "/assets/gallery/grill-wars/october/oct-video.mp4",
    img: "/assets/gallery/grill-wars/october/oct-vid-thumb.png",
    link: "/gallery#october-grill-wars",
  },
  {
    id: "hero-vid-2",
    title: "Farm Sourcing",
    count: "Field Operations",
    video: "/category-videos/video-2.mp4",
    img: "/video-thumbs/thumb-2.png",
    link: "/shop?category=farm-sourcing",
  },
  {
    id: "hero-vid-3",
    title: "Trade Show Reel",
    count: "Lugogo Grounds 2026",
    video: "/assets/uma-trade-show/uma-video.mp4",
    img: "/video-thumbs/thumb-3.png",
    link: "/gallery#trade-show-section",
  },
];

// 2. Sub-Hero Event Section: 2-Column Featured Video Grid (Home Page)
export const tradeShowFeaturedVideos = [
  {
    id: "featured-reel-1",
    title: "Exhibition Booth Showcase",
    subtitle: "Lugogo Show Grounds • Live Booth Walkthrough",
    video: "/assets/uma-trade-show/uma-video.mp4",
    poster: "/video-thumbs/uma-video-thumb.png",
    aspectRatio: "aspect-[9/16]", // Reels / vertical video format
  },
  {
    id: "featured-reel-2",
    title: "Trade Show Highlights",
    subtitle: "Lugogo Grounds • Live Exhibition Footage",
    video: "/trade-show-vid.mp4",
    poster: "/video-thumbs/uma-video-thumb2.png",
    aspectRatio: "aspect-[9/16]",
  },
];

// 3. Dedicated Gallery Section: Independence Trade Show 2026
export const tradeShowGallery = {
  sectionTitle: "Independence Trade Show 2026",
  badge: "Featured Event • October 2026",
  location: "Lugogo Show Grounds • Kampala",
  description:
    "Highlights and live footage from our booth at the Lugogo Trade Show Grounds opposite Little Ritz. Explore our photo gallery and video reels showcasing customer tasting sessions, live product demos, and our full organic spice lineup.",
  
  // Event Video Reels
  videos: [
    {
      id: "gallery-reel-1",
      src: "/assets/uma-trade-show/uma-video.mp4",
      poster: "/video-thumbs/uma-video-thumb.png",
      title: "Exhibition Booth Showcase",
      badge: "Reel 1",
    },
    {
      id: "gallery-reel-2",
      src: "/trade-show-vid.mp4",
      poster: "/video-thumbs/uma-video-thumb2.png",
      title: "Trade Show Highlights",
      badge: "Reel 2",
    },
    {
      id: "gallery-reel-3",
      src: "/assets/uma-trade-show/uma-video2.mp4",
      poster: "/video-thumbs/uma-video-thumb3.png",
      title: "Live Product Demos & Customer Interactions",
      badge: "Reel 3",
    },
  ],

  // Event Photo Gallery
  photos: [
    { id: "photo-1", src: "/assets/uma-trade-show/uma1.jpeg", alt: "Trade Show Booth Display 1" },
    { id: "photo-2", src: "/assets/uma-trade-show/uma2.jpeg", alt: "Trade Show Customer Tasting 2" },
    { id: "photo-3", src: "/assets/uma-trade-show/uma3.jpeg", alt: "Trade Show Product Showcase 3" },
    { id: "photo-4", src: "/assets/uma-trade-show/uma4.jpeg", alt: "Trade Show Live Demo 4" },
    { id: "photo-5", src: "/assets/uma-trade-show/uma5.jpeg", alt: "Trade Show Team & Visitors 5" },
    { id: "photo-6", src: "/assets/uma-trade-show/uma6.jpeg", alt: "Trade Show Organic Lineup 6" },
    { id: "photo-7", src: "/assets/uma-trade-show/uma7.jpeg", alt: "Trade Show Exhibition Floor 7" },
    { id: "photo-8", src: "/assets/uma-trade-show/uma8.jpeg", alt: "Trade Show Special Pack Offers 8" },
  ],

  // Social Channels
  socialLinks: {
    tiktok: "https://www.tiktok.com/@Greendeli256",
    instagram: "https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag==",
  },
};

// 4. Dedicated Gallery Section: October Grill Wars Highlights
export const octoberGrillWarsGallery = {
  sectionTitle: "October Grill Wars Highlights",
  badge: "Featured Event • October 2026",
  location: "Shisha Nyama • Bugolobi, Kampala",
  editionTag: "October Edition Live Recap",
  description:
    "The heat was on! Green Deli Spices powered the flames at the October edition of Grill Wars. Watch the live competition video reel and browse through all the exclusive photo highlights capturing the grill masters, customer tasting sessions, and our signature spice collection in action.",
  video: {
    src: "/assets/gallery/grill-wars/october/oct-video.mp4",
    poster: "/assets/gallery/grill-wars/october/oct-vid-thumb.png",
    title: "October Grill Wars Live Reel",
    subtitle: "Live Action, Sizzling Flames & Artisanal Spices",
  },
  featuredPhoto: {
    src: "/assets/gallery/grill-wars/october/oct-1.jpeg",
    alt: "October Grill Wars Featured Photo",
    title: "October Grill Wars Live",
    subtitle: "Artisanal Spices Fueling the Flames at Shisha Nyama",
  },
  photos: [
    { id: "oct-photo-1", src: "/assets/gallery/grill-wars/october/oct-1.jpeg", alt: "October Grill Wars Photo 1" },
    { id: "oct-photo-2", src: "/assets/gallery/grill-wars/october/oct-2.jpeg", alt: "October Grill Wars Photo 2" },
    { id: "oct-photo-3", src: "/assets/gallery/grill-wars/october/oct-3.jpeg", alt: "October Grill Wars Photo 3" },
    { id: "oct-photo-4", src: "/assets/gallery/grill-wars/october/oct-4.jpeg", alt: "October Grill Wars Photo 4" },
    { id: "oct-photo-5", src: "/assets/gallery/grill-wars/october/oct-5.jpeg", alt: "October Grill Wars Photo 5" },
    { id: "oct-photo-6", src: "/assets/gallery/grill-wars/october/oct-6.jpeg", alt: "October Grill Wars Photo 6" },
    { id: "oct-photo-7", src: "/assets/gallery/grill-wars/october/oct-7.jpeg", alt: "October Grill Wars Photo 7" },
    { id: "oct-photo-8", src: "/assets/gallery/grill-wars/october/oct-8.jpeg", alt: "October Grill Wars Photo 8" },
    { id: "oct-photo-9", src: "/assets/gallery/grill-wars/october/oct-9.jpeg", alt: "October Grill Wars Photo 9" },
    { id: "oct-photo-10", src: "/assets/gallery/grill-wars/october/oct-10.jpeg", alt: "October Grill Wars Photo 10" },
    { id: "oct-photo-11", src: "/assets/gallery/grill-wars/october/oct-11.jpeg", alt: "October Grill Wars Photo 11" },
    { id: "oct-photo-12", src: "/assets/gallery/grill-wars/october/oct-12.jpeg", alt: "October Grill Wars Photo 12" },
    { id: "oct-photo-13", src: "/assets/gallery/grill-wars/october/oct-13.jpeg", alt: "October Grill Wars Photo 13" },
    { id: "oct-photo-14", src: "/assets/gallery/grill-wars/october/oct-14.jpeg", alt: "October Grill Wars Photo 14" },
    { id: "oct-photo-15", src: "/assets/gallery/grill-wars/october/oct-15.jpeg", alt: "October Grill Wars Photo 15" },
    { id: "oct-photo-16", src: "/assets/gallery/grill-wars/october/oct-16.jpeg", alt: "October Grill Wars Photo 16" },
  ],
  socialLinks: {
    tiktok: "https://www.tiktok.com/@Greendeli256",
    instagram: "https://www.instagram.com/greendelispices?igsi=MXhjZTlkNmZ3N3Y4ag==",
  },
};

