import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  layout = "grid";
  loading?: boolean;
  posts: any;
  blogService: BlogService = inject(BlogService);
  private querySubscription?: Subscription;

  toggleLayout() {
    this.layout = this.layout === "grid" ? "list" : "grid";
  }

  ngOnInit() {
    this.querySubscription = this.blogService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
