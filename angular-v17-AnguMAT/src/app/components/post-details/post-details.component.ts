import { Component, Input, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [AsyncPipe, NgIf, DatePipe, MatIconModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export default class PostDetailsComponent implements OnInit {
  @Input({ required: true }) slug!: string;

  post$!: Observable<Post>;
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.post$ = this.blogService.getSinglePost(this.slug);
  }
}
