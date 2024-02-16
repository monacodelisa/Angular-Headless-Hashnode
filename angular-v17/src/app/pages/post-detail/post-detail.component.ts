import { Component, Input, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Post } from '../../types/post.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf, DatePipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export default class PostDetailComponent implements OnInit {
  @Input({ required: true }) slug!: string;

  post$!: Observable<Post>;
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.post$ = this.blogService.getSinglePost(this.slug);
  }
}
