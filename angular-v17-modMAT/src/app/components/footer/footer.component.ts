import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  blogInfo: any;
  blogName = "";
  date = new Date().getFullYear();
  private querySubscription?: Subscription;
  blogService: BlogService = inject(BlogService);

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
