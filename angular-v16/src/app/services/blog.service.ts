import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs';
import { GET_POSTS } from '../graphql.operations';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private apollo: Apollo) { }

  getPosts() {
    return this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.posts.edges));
  }
}
