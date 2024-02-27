import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blog.service';

import { KeyValuePipe } from '@angular/common';
import { BlogInfo, SocialLinks } from '../../models/blog-info';
import { RouterLink } from '@angular/router';
import { SeriesList } from '../../models/post';
import { FollowDialogComponent } from '../../partials/follow-dialog/follow-dialog.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [KeyValuePipe, RouterLink, FollowDialogComponent],
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
  modalService: ModalService = inject(ModalService);
  private querySubscription?: Subscription;

  ngOnInit(): void {
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        const { __typename, ...links } = data.links;
        this.blogSocialLinks = links;
        this._validateFavicon();
      });
    this.querySubscription = this.blogService
      .getSeriesList()
      .subscribe((data) => {
        this.seriesList = data;
      });
  }

  toggleTheme(): void {
    this.themeService.updateTheme();
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }

  private _createFaviconLink(href: string): void {
    const link: HTMLLinkElement = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = href;
    link.id = 'favicon-icon';
    document.head.appendChild(link);
  }

  private _getDefaultLogoIfNoFavicon(): void {
    if (this.blogInfo.favicon) {
      this._createFaviconLink(this.blogInfo.favicon);
    } else {
      this.blogInfo.author?.profilePicture && this._createFaviconLink(this.blogInfo.author.profilePicture);
    }
  }

  private _validateFavicon(): void {
    const favicon: HTMLLinkElement | null = document.querySelector('[type="image/x-icon"]');
    !favicon && this._getDefaultLogoIfNoFavicon();
  }
}
