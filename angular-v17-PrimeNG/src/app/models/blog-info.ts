import { SocialLinks } from './social-links';

export interface BlogInfo {
  id: string;
  title: string;
  links: SocialLinks;
  followersCount: number;
  url: string;
}
