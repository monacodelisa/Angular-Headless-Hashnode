import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Post } from '../../models/post';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClipboardCopyButtonDirective } from '../../directives/clipboard-copy-button.directive';
import { SanitizerHtmlPipe } from '../../pipes/sanitizer-html.pipe';
import { ThemeService } from '../../services/theme.service';
import { FooterComponent } from '../footer/footer.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { BlogInfo } from '../../models/blog-info';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    SidenavComponent,
    FooterComponent,
    RouterLink,
    AsyncPipe,
    DatePipe,
    SanitizerHtmlPipe,
    ClipboardCopyButtonDirective,
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  sidenavOpen: boolean = false;
  blogInfo!: BlogInfo;
  blogName: string = '';
  post$!: Observable<Post>;
  themeService: ThemeService = inject(ThemeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private querySubscription?: Subscription;

  @Input({ required: true }) slug!: string;

  ngOnInit(): void {
    this.querySubscription = this.blogService
    .getBlogInfo()
    .subscribe((data) => {
      this.blogInfo = data;
      this.blogName = this.blogInfo.title;
    });
    this.post$ = this.blogService.getSinglePost(this.slug);
  }

  toggleTheme(): void {
    this.themeService.updateTheme();
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
