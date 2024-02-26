import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnDestroy, OnInit, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { SocialLinks } from "src/app/models/blog-info";
import { SeriesList } from "src/app/models/post";
import { FollowDialogComponent } from "src/app/partials/follow-dialog/follow-dialog.component";
import { BlogService } from "src/app/services/blog.service";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
	blogInfo: any;
	blogName: string = "";
	blogSocialLinks!: SocialLinks;
	seriesList!: SeriesList[];
	themeService: ThemeService = inject(ThemeService);
	blogService: BlogService = inject(BlogService);
	private querySubscription?: Subscription;

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private document: Document) {}

	ngOnInit(): void {
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
    this.dialog.open(FollowDialogComponent, {
      height: '50vh',
      width: '26vw',
    });
    let followDialog = this.document.querySelector('mat-dialog-container') as HTMLElement;
    if (this.themeService.themeSignal() === 'dark') {
      followDialog.classList.add('dark');
    }
  }

	ngOnDestroy() {
		this.querySubscription?.unsubscribe();
	}
}
