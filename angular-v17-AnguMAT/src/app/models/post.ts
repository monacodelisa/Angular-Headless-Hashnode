export type Post = {
  id: string;
  slug: string;
  title: string;
  readTimeInMinutes: number;
  tags: Tag[];
  author: Author;
  coverImage: CoverImage;
  content: Content;
  publishedAt: string;
};

export interface Tag {
  name: string;
}

export interface Author {
  name: string;
  profilePicture: string;
  socialMediaLinks: SocialMediaLinks;
}

export interface SocialMediaLinks {
  twitter: string;
  youtube: string;
}

export interface CoverImage {
  url: string;
}

export interface Content {
  html: string;
}
