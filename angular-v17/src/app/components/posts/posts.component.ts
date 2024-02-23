import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export default class PostsComponent implements OnInit, OnDestroy {
  loading?: boolean;
  posts = new Observable<Post[]>();
  blogService: BlogService = inject(BlogService);
  private router = inject(Router);
  private querySubscription?: Subscription;

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
