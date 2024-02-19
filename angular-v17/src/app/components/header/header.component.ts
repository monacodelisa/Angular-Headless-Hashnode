import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';

import { KeyValuePipe } from '@angular/common';
import { SocialLinks } from '../../models/social-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogInfo: any;
  blogName = '';
  blogSocialLinks!: SocialLinks;
  private querySubscription?: Subscription;
  themeService: ThemeService = inject(ThemeService);
  blogService: BlogService = inject(BlogService);

  topics = [
    { name: 'Angular', route: '/angular' },
    { name: 'Web Dev', route: '/webdev' },
    { name: 'DS & Algo', route: '/dsa' },
  ];

  ngOnInit(): void {
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        const { __typename, ...links } = data.links;
        this.blogSocialLinks = links;
      });
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
