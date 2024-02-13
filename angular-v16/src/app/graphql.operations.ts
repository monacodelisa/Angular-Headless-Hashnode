import { gql } from "apollo-angular";

export const GET_POSTS = gql`
query Publication {
  publication(host: "blog.monacodelisa.com") {
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
