import { Component, Input, OnInit, signal } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { DatePipe } from "@angular/common";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    DatePipe,
    TagModule
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

  @Input()
  slug!: string;

  post = signal<any>(null);

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getSinglePost(this.slug)
      .subscribe((response) => this.post.set(response));
  }

}
