import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { BlogService } from '../../services/blog.service';

import { KeyValuePipe } from '@angular/common';
import { SocialLinks } from '../../models/social-links';
import { BlogInfo } from '../../models/blog-info';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    KeyValuePipe,
    ToolbarModule,
    ButtonModule,
    InputSwitchModule
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
  themeService: ThemeService = inject(ThemeService);

  private querySubscription?: Subscription;

  topics = [
    {name: 'Angular', route: '/angular'},
    {name: 'Web Dev', route: '/webdev'},
    {name: 'DS & Algo', route: '/dsa'},
  ];

  ngOnInit(): void {
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        const { ...links } = data.links;
        this.blogSocialLinks = links;
      });
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
