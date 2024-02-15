import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: any;
  blogService: BlogService = inject(BlogService);
  private querySubscription?: Subscription;

  ngOnInit() {
    this.querySubscription = this.blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
