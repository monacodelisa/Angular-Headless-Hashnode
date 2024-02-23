import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, OnDestroy {
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
