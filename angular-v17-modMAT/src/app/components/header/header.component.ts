import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Subscription } from "rxjs";
import { SocialLinks } from "src/app/models/blog-info";
import { SeriesList } from "src/app/models/post";
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

	ngOnDestroy() {
		this.querySubscription?.unsubscribe();
	}
}
