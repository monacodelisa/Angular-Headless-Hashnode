import { Component, inject } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { CardModule } from "primeng/card";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CardModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts: any;

  private blogService = inject(BlogService);

  private router = inject(Router);

  ngOnInit() {
    this.blogService.getPosts()
      .subscribe((response) => this.posts = response);
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }
}
