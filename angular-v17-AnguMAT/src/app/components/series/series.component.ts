import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterLink, AsyncPipe, MatGridListModule, MatCardModule],
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
