import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs';
import { GET_BLOG_INFO, GET_POSTS } from '../graphql.operations';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private apollo: Apollo) { }

  getBlogInfo() {
    return this.apollo
    .watchQuery<any>({
      query: GET_BLOG_INFO,
    })
    .valueChanges.pipe(map(({ data }) => data.publication));
  }

  getPosts() {
    return this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.posts.edges));
  }
}
