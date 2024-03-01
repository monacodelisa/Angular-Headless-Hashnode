import { Component, Inject, inject, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { DOCUMENT, KeyValuePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SeriesList } from "../../models/post";
import { BlogInfo, BlogLinks } from "../../models/blog-info";
import { BlogService } from "../../services/blog.service";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialog } from "@angular/material/dialog";
import { FollowDialogComponent } from "../../partials/follow-dialog/follow-dialog.component";
import { SearchDialogComponent } from "../../partials/search-dialog/search-dialog.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    KeyValuePipe,
    RouterLink,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  blogInfo!: BlogInfo;
  blogId: string = "";
  blogName: string = "";
  // start with default image to prevent 404 when returning from post-details page
  blogImage: string = "/assets/images/angular-headless-hashnode-logo.jpg";
  blogSocialLinks!: BlogLinks;
  seriesList!: SeriesList[];
  themeService: ThemeService = inject(ThemeService);
  blogService: BlogService = inject(BlogService);

  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogId = this.blogInfo.id;
        this.blogName = this.blogInfo.title;
        if (this.blogInfo.isTeam && this.blogInfo.favicon) {
          this.blogImage = this.blogInfo.favicon;
        } else {
          this.blogImage = '/assets/images/angular-headless-hashnode-logo.jpg'
        }
        if (!this.blogInfo.isTeam) {
          this.blogService
            .getAuthorInfo()
            .subscribe((data) => {
              if (data.profilePicture) {
                this.blogImage = data.profilePicture;
              } else {
                this.blogImage = '/assets/images/angular-headless-hashnode-logo.jpg'
              }
            });
        }
        const {__typename, ...links} = data.links;
        this.blogSocialLinks = links;
      });

    this.blogService
      .getSeriesList()
      .subscribe((data) => {
        this.seriesList = data;
      });
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  openFollowDialog() {
    this.dialog.open(FollowDialogComponent, {
      height: "50vh",
      width: "26vw",
    });
    this.applyDialogTheme();
  }

  openSearchDialog() {
    this.dialog.open(SearchDialogComponent, {
      id: 'searchDialog',
      width: '60%',
      maxHeight: '70%',
      position: {top: '150px'},
      data: this.blogId
    });
    this.applyDialogTheme();
  }

  applyDialogTheme() {
    let followDialog = this.document.querySelector(
      "mat-dialog-container"
    ) as HTMLElement;
    if (this.themeService.themeSignal() === "dark") {
      followDialog.classList.add("dark");
    }
  }
}
