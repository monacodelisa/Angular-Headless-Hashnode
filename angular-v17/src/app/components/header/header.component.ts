import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';

import { KeyValuePipe } from '@angular/common';
import { BlogInfo, SocialLinks } from '../../models/blog-info';
import { RouterLink } from '@angular/router';
import { SeriesList } from '../../models/post';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [KeyValuePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogInfo!: BlogInfo;
  blogName: string = '';
  blogSocialLinks!: SocialLinks;
  seriesList!: SeriesList[];
  themeService: ThemeService = inject(ThemeService);
  blogService: BlogService = inject(BlogService);
  private querySubscription?: Subscription;

  ngOnInit(): void {
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        this.blogSocialLinks = data.links;
      });
    this.querySubscription = this.blogService
      .getSeriesList()
      .subscribe((data) => {
        this.seriesList = data;
      });
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
