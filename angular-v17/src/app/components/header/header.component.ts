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
    // to add blog image (favicon) query
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        const { __typename, ...links } = data.links;
        this.blogSocialLinks = links;
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

  openDialog() {
    this.modalService.showDialog = true;
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
