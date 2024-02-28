import { MediaMatcher } from "@angular/cdk/layout";
import {
	ChangeDetectorRef,
	Component,
	Input,
	OnDestroy,
	OnInit,
	inject,
} from "@angular/core";
import { BlogService } from "../../services/blog.service";
import { AsyncPipe, DatePipe, KeyValuePipe } from "@angular/common";
import { Post, SeriesList } from "../../models/post";
import { Observable, Subscription } from "rxjs";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BlogInfo, BlogLinks } from "../../models/blog-info";
import { RouterLink } from "@angular/router";
import { ThemeService } from "../../services/theme.service";
import { FooterComponent } from "../footer/footer.component";
import { MatSlideToggle } from "@angular/material/slide-toggle";

@Component({
	selector: "app-post-details",
	standalone: true,
	imports: [
		RouterLink,
    FooterComponent,
		AsyncPipe,
		DatePipe,
    KeyValuePipe,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
    MatSlideToggle,
	],
	templateUrl: "./post-details.component.html",
	styleUrl: "./post-details.component.scss",
})
export class PostDetailsComponent implements OnInit, OnDestroy {
	mobileQuery: MediaQueryList;
	blogInfo!: BlogInfo;
	blogName: string = "";
	blogSocialLinks!: BlogLinks;
	seriesList!: SeriesList[];
	post$!: Observable<Post>;
  themeService: ThemeService = inject(ThemeService);
	private blogService = inject(BlogService);
	private querySubscription?: Subscription;
	private _mobileQueryListener: () => void;

	@Input({ required: true }) slug!: string;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
		this.querySubscription = this.blogService
			.getBlogInfo()
			.subscribe((data) => {
				this.blogInfo = data;
				this.blogName = this.blogInfo.title;
        const { __typename, ...links } = data.links;
        this.blogSocialLinks = links;
			});
		this.post$ = this.blogService.getSinglePost(this.slug);
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
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
