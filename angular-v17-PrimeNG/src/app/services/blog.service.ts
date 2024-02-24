import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_BLOG_INFO, GET_POSTS, GET_SERIES_LIST, GET_SINGLE_POST } from '../graphql.operations';
import { map, Observable } from 'rxjs';
import { BlogInfo } from '../models/blog-info';
import { Post, SeriesList } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private apollo: Apollo) {}

  getBlogInfo(): Observable<BlogInfo> {
    return this.apollo
      .watchQuery<any>({
        query: GET_BLOG_INFO,
      })
      .valueChanges.pipe(map(({ data }) => data.publication));
  }

  getPosts(): Observable<Post[]> {
    return this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.posts.edges.map((edge: { node: any; }) => edge.node)));
  }

  getSeriesList(): Observable<SeriesList[]> {
    return this.apollo
    .watchQuery<any>({
      query: GET_SERIES_LIST,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.seriesList.edges.map((edge: { node: any; }) => edge.node)));
  }

  getSinglePost(slug: string): Observable<Post> {
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
