import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  GET_BLOG_INFO,
  GET_POSTS,
  GET_SINGLE_POST,
} from '../graphql.operations';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apollo = inject(Apollo);

  getBlogInfo() {
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
      .valueChanges.pipe(
        map(({ data }) => data.publication.posts.edges.map((a: any) => a.node))
      );
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
