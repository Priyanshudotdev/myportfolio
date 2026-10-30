export interface ArtItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image: string;
  tags: string[];
}

export const artsData: ArtItem[] = [
  {
    id: "poster-design-techroots",
    title: "Poster Design",
    subtitle: "Techroots 15.0 · YCCE Techfest",
    category: "Event Poster / Typography",
    date: "August 23, 2025",
    organization: "Department of Information Technology, YCCE",
    description:
      "Official promo poster for the Techroots 15.0 Poster Design event. Crafted with pixelated halftone typography, cyber matrix circuitry textures, and software emblem accents.",
    image: "/arts/poster-design.png",
    tags: ["Graphic Design", "Typography", "Cyber Aesthetic", "YCCE Techfest"],
  },
  {
    id: "reel-it-techroots-icon",
    title: "Reel It",
    subtitle: "Techroots 15.0 & Icon 25.0",
    category: "Campaign Poster / Collab",
    date: "August 24, 2025",
    organization: "Department of IT, YCCE x Capello Salon",
    description:
      "Vibrant social-first promotional poster designed for the 'Reel It' short video contest in collaboration with Capello Salon, blending bold typography with 3D social reaction elements.",
    image: "/arts/reel-it.png",
    tags: ["Social Campaign", "Brand Collab", "3D Elements", "Visual Identity"],
  },
  {
    id: "photo-arena-techroots",
    title: "Photo Arena",
    subtitle: "Techroots 15.0 · YCCE Techfest",
    category: "Photography Contest / Creative Direction",
    date: "August 24, 2025",
    organization: "Department of Information Technology, YCCE",
    description:
      "Moody, cinematic poster for the Photo Arena competition. Highlights dynamic camera lens focal depths, textured industrial backdrops, and dramatic spotlight contrast.",
    image: "/arts/photo-arena.png",
    tags: [
      "Creative Direction",
      "Lighting & Depth",
      "Photography",
      "Poster Design",
    ],
  },
];
