import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Post } from "../../models/post";
import { AsyncPipe } from "@angular/common";
import { BlogService } from "../../services/blog.service";
import { switchMap } from "rxjs";

@Component({
	selector: "app-series",
	standalone: true,
	imports: [RouterLink, AsyncPipe],
	templateUrl: "./series.component.html",
	styleUrl: "./series.component.scss",
})
export class SeriesComponent implements OnInit {
	route: ActivatedRoute = inject(ActivatedRoute);
	slug: string = "";
  postsInSeries$!: Observable<Post[]>;
  blogService: BlogService = inject(BlogService);
  private router = inject(Router);

	ngOnInit(): void {
		this.postsInSeries$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.slug = params["slug"];
        return this.blogService.getPostsInSeries(this.slug);
      })
    );
	}

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }
}
