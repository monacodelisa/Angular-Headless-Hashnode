import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent implements OnInit {
  slug: string = "";
  postsInSeries$!: Observable<Post[]>;
  blogService: BlogService = inject(BlogService);
  private router = inject(Router);
	route: ActivatedRoute = inject(ActivatedRoute);

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
