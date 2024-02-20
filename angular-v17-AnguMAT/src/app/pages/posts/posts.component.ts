import { MatCardModule } from '@angular/material/card';
import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatGridListModule, AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export default class PostsComponent {
  private blogService = inject(BlogService);
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  posts$ = this.blogService.getPosts();

  cols$ = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map(({ breakpoints }) => {
        if (breakpoints[Breakpoints.XSmall]) {
          return 1;
        } else if (breakpoints[Breakpoints.Small]) {
          return 2;
        } else if (breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.Large]) {
          return 3;
        } else if (breakpoints[Breakpoints.XLarge]) {
          return 4;
        }
        return 3;
      })
    );

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }
}
