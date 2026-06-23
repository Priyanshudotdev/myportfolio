export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  tags?: string[];
  author: {
    name: string;
    avatar: string;
  };
};
