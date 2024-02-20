import { Component } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  blogName = '';

  date = new Date().getFullYear();

  private querySubscription?: Subscription;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.querySubscription = this.blogService.getBlogInfo()
      .subscribe((data) => this.blogName = data.title);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
