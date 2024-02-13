import { Component, OnDestroy, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from 'rxjs';
import { GET_POSTS } from "src/app/graphql.operations";

@Component({
	selector: "app-posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
	loading?: boolean;
  posts: any;

  private querySubscription?: Subscription;

	constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_POSTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.publication.posts.edges;
        console.log(this.posts);
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
