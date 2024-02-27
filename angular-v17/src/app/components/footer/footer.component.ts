import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { BlogInfo } from '../../models/blog-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  blogInfo!: BlogInfo;
  blogName = '';
  date = new Date().getFullYear();
  blogService: BlogService = inject(BlogService);

  private querySubscription?: Subscription;

  ngOnInit(): void {
    this.querySubscription = this.blogService.getBlogInfo().subscribe((data) => {
      this.blogInfo = data;
      this.blogName = this.blogInfo.title;
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
