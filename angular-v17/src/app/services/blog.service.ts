import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs';
import { GET_BLOG_INFO, GET_POSTS, GET_SERIES_LIST, GET_SINGLE_POST } from '../graphql.operations';

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

  getSeriesList() {
    return this.apollo
    .watchQuery<any>({
      query: GET_SERIES_LIST,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.seriesList.edges));
  }

  getSinglePost(slug: string) {
    return this.apollo
    .watchQuery<any>({
      query: GET_SINGLE_POST,
      variables: {
        slug: slug,
      },
    })
    .valueChanges.pipe(map(({ data }) => data.publication.post));
  }
}
