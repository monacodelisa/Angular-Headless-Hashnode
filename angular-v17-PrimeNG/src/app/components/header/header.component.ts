import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogInfo, SocialLinks } from '../../models/blog-info';
import { SeriesList } from '../../models/post';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonModule,
    FormsModule,
    InputSwitchModule,
    KeyValuePipe,
    RouterLink,
    ToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogService: BlogService = inject(BlogService);
  blogInfo!: BlogInfo;
  blogName:string = '';
  blogSocialLinks!: SocialLinks;
  checked: boolean = true;
  selectedTheme: string = 'dark';
  seriesList!: SeriesList[];
  themeService: ThemeService = inject(ThemeService);

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

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

}
