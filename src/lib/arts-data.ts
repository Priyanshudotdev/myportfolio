export interface ArtItem {
  id: string;
  title: string;
  image: string;
}

export const artsData: ArtItem[] = [
  {
    id: "poster-design",
    title: "Poster Design",
    image: "/arts/poster-design.png",
  },
  {
    id: "reel-it",
    title: "Reel It",
    image: "/arts/reel-it.png",
  },
  {
    id: "photo-arena",
    title: "Photo Arena",
    image: "/arts/photo-arena.png",
  },
];
