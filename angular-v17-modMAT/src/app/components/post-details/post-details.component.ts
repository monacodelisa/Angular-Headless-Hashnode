import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "src/app/models/post";
import { BlogService } from "src/app/services/blog.service";

@Component({
	selector: "app-post-details",
	templateUrl: "./post-details.component.html",
	styleUrl: "./post-details.component.scss",
})
export class PostDetailsComponent implements OnInit {
	slug!: string;
	post$!: Observable<Post>;
	private blogService: BlogService = inject(BlogService);
	route: ActivatedRoute = inject(ActivatedRoute);

	ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log("Post Slug:", this.slug);
      this.post$ = this.blogService.getSinglePost(this.slug);
    });
  }
}
