import { gql } from "apollo-angular";

export const BLOG_HOST = "angular-headless.hashnode.dev";

export const GET_BLOG_INFO = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    title,
    links {
      twitter
      instagram
      github
      website
      hashnode
      youtube
      dailydev
      linkedin
      mastodon
    }
    followersCount,
    url
  }
}
`;

export const GET_POSTS = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    isTeam,
    title,
    posts(first: 10) {
      edges {
        node {
          title,
          brief,
          url
        }
      }
    }
  }
}
`;
