import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

import { KeyValuePipe } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocialLinks } from '../../models/blog-info';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    KeyValuePipe,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy{
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
