export interface BlogInfo {
  id: string;
  title: string;
  links: SocialLinks;
  followersCount: number;
  url: string;
}

export type SocialLinks = {
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

