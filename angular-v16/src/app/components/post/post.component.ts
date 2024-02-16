import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";

@Component({
	selector: "app-post",
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
	post: any | undefined;
	blogService: BlogService = inject(BlogService);
	route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const postSlug = String(this.route.snapshot.params['slug']);

    this.blogService.getPostBySlug(postSlug).subscribe((data) => {
      this.post = data;
      console.log(this.post);
    });
  }
}
