import { Component, inject, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    DatePipe,
    TagModule,
    AsyncPipe
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  @Input() slug!: string;

  post = new Observable<Post>();

  private blogService = inject(BlogService);

  ngOnInit() {
    this.post = this.blogService.getSinglePost(this.slug);
  }
}
