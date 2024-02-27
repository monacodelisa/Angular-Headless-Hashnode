export interface BlogInfo {
  id: string;
  title: string;
  links: SocialLinks;
  followersCount: number;
  url: string;
  favicon?: string;
  author?:Author;
}

export type SocialLinks = {
  __typename?: string;
  twitter: string;
  instagram: string;
  github: string;
  website: string;
  hashnode: string;
  youtube: string;
  dailydev: string;
  linkedin: string;
  mastodon: string;
};

export interface Author {
  profilePicture?: string;
}
