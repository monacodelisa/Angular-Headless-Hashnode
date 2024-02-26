import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { ThemeService } from "../../services/theme.service";
import { BlogService } from "../../services/blog.service";
import { AsyncPipe, KeyValuePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { BlogInfo, SocialLinks } from "../../models/blog-info";
import { SeriesList } from "../../models/post";

import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { DialogModule } from "primeng/dialog";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		AsyncPipe,
		ButtonModule,
		FormsModule,
		InputSwitchModule,
		KeyValuePipe,
		RouterLink,
		ToolbarModule,
		DialogModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
	blogInfo!: BlogInfo;
	blogName: string = "";
	blogSocialLinks!: SocialLinks;
	checked: boolean = true;
	selectedTheme: string = "dark";
	seriesList!: SeriesList[];
	visible: boolean = false;
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

	onThemeChange(theme: string): void {
		this.selectedTheme = theme;
		this.themeService.setTheme(theme);
	}

	showDialog() {
		this.visible = true;
	}

	ngOnDestroy() {
		this.querySubscription?.unsubscribe();
	}
}
