import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    DatePipe,
    TagModule,
    AsyncPipe
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {
  slug!: string;
  post$!: Observable<Post>;
  route: ActivatedRoute = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log("Post Slug:", this.slug);
      this.post$ = this.blogService.getSinglePost(this.slug);
    });
  }
}
