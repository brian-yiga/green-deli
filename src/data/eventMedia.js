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
    title: "grill wars",
    count: "Factory Highlights",
    video: "/category-videos/video-1.mp4",
    img: "/video-thumbs/thumb-1.png",
    link: "/shop?category=agro-processing",
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

