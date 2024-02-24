import { Component, Input, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf, DatePipe, MatChipsModule, MatIconModule],
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
