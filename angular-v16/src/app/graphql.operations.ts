import { gql } from "apollo-angular";

export const GET_POSTS = gql`
query Publication {
  publication(host: "angular-headless.hashnode.dev") {
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
