import{f as u,g as r}from"./chunk-PDJYHOBO.js";import{A as i,ka as l,va as n}from"./chunk-Z76P3FE4.js";var a="angular-headless.hashnode.dev",p=r`
query Publication {
  publication(host: "${a}") {
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
`,c=r`
query Publication {
  publication(host: "${a}") {
    id,
    isTeam,
    title,
    posts(first: 10) {
      edges {
        node {
          id,
          slug,
          coverImage{
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
`,h=r`
query SinglePost($slug: String!) {
  publication(host: "${a}") {
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
`;var I=(()=>{let t=class t{constructor(){this.apollo=n(u)}getBlogInfo(){return this.apollo.watchQuery({query:p}).valueChanges.pipe(i(({data:e})=>e.publication))}getPosts(){return this.apollo.watchQuery({query:c}).valueChanges.pipe(i(({data:e})=>e.publication.posts.edges.map(o=>o.node)))}getSinglePost(e){return this.apollo.watchQuery({query:h,variables:{slug:e}}).valueChanges.pipe(i(({data:o})=>o.publication.post))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{I as a};
