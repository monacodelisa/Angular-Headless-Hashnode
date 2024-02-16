import { Component, OnInit, inject } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";

@Component({
	selector: "app-post",
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
	post: any | undefined;
  postContent: SafeHtml = '';
	blogService: BlogService = inject(BlogService);
	route: ActivatedRoute = inject(ActivatedRoute);
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    const postSlug = String(this.route.snapshot.params['slug']);

    this.blogService.getPostBySlug(postSlug).subscribe((data) => {
      this.post = data;
      this.postContent = this.sanitizer.bypassSecurityTrustHtml(data.content.html);
      console.log(this.post);
    });
  }
}
