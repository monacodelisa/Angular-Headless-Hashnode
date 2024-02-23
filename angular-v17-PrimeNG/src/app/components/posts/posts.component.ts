import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CardModule, AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts = new Observable<any>();
  private router = inject(Router);
  private blogService = inject(BlogService);

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/post', slug]);
  }
}
