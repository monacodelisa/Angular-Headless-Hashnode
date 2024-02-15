import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs';
import { GET_POSTS } from '../../graphql.operations';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges.pipe(map(({ data }) => data.publication.posts.edges)).subscribe(
      (posts) => {
        this.posts = posts;
        console.log(posts);
      }
    );
  }
}
