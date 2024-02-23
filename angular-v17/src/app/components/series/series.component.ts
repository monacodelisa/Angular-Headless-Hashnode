import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Post } from "../../models/post";
import { AsyncPipe } from "@angular/common";
import { BlogService } from "../../services/blog.service";

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
  postsInSeries = new Observable<Post[]>();
  blogService: BlogService = inject(BlogService);

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.slug = params["slug"];
		});
    this.postsInSeries = this.blogService.getPostsInSeries(this.slug);
	}
}
