import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  slug!: string;
  post$!: Observable<Post>;
  route: ActivatedRoute = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.post$ = this.blogService.getSinglePost(this.slug);
    });
  }
}
