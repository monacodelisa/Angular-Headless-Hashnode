import { gql } from "apollo-angular";

export const BLOG_HOST = "angular-headless.hashnode.dev";

export const GET_BLOG_INFO = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id,
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
    id,
    isTeam,
    title,
    posts(first: 10) {
      edges {
        node {
          id,
          slug,
          coverImage {
            url
          }
          title,
          brief,
          content {
            html
          }
        }
      }
    }
  }
}
`;

export const GET_SERIES_LIST = gql`
query Publication {
  publication(host: "${BLOG_HOST}") {
    id,
    title,
    seriesList(first:10) {
      edges {
        node {
          id,
          name,
          slug,
        }
      }
    }
  }
}
`;

export const GET_POSTS_IN_SERIES = gql`
query Publication ($slug: String!) {
  publication(host: "${BLOG_HOST}") {
    id,
    isTeam ,
    title,
    series(slug: $slug) {
      posts(first: 10) {
        edges {
          node {
            id,
            title,
            slug,
            coverImage {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const GET_SINGLE_POST = gql`
query SinglePost($slug: String!) {
  publication(host: "${BLOG_HOST}") {
    post(slug: $slug) {
      id,
      slug,
      title,
      readTimeInMinutes,
      tags {
        name
      },
      author {
        name,
        profilePicture,
        socialMediaLinks {
          twitter
          youtube
        }
      }
      coverImage {
        url
      },
      content {
        html
      },
      publishedAt,
    }
  }
}
`;
