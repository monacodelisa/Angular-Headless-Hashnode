import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Subscription } from 'rxjs';
import { BlogService } from "src/app/services/blog.service";

@Component({
	selector: "app-posts",
	templateUrl: "./posts.component.html",
	styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit, OnDestroy {
	loading?: boolean;
  posts: any;
  blogService: BlogService = inject(BlogService);
  private querySubscription?: Subscription;

  ngOnInit() {
    this.querySubscription = this.blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
