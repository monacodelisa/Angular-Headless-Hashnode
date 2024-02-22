import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export default class PostsComponent implements OnInit, OnDestroy {
  loading?: boolean;
  posts: any;
  blogService: BlogService = inject(BlogService);
  private router = inject(Router);
  private querySubscription?: Subscription;

  ngOnInit() {
    this.querySubscription = this.blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
