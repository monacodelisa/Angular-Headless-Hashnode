import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocialLinks } from 'src/app/models/social-links';
import { BlogService } from 'src/app/services/blog.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogInfo: any;
  blogName = '';
  blogSocialLinks!: SocialLinks;
  private querySubscription?: Subscription;
  themeService: ThemeService = inject(ThemeService);
  blogService: BlogService = inject(BlogService);

	topics = [
		{
			name: "Angular",
			route: "/angular",
		},
		{
			name: "Frontend",
			route: "/fropntend",
		},
		{
			name: "programming",
			route: "/programming",
		},
		{
			name: "Ds & Algo",
			route: "/ds-algo",
		},
		{
			name: "TypeScript",
			route: "/typescript",
		},
		{
			name: "clean code",
			route: "/clean-code",
		},
	];

  ngOnInit(): void {
    this.querySubscription = this.blogService
      .getBlogInfo()
      .subscribe((data) => {
        this.blogInfo = data;
        this.blogName = this.blogInfo.title;
        const { __typename, ...links } = data.links;
        this.blogSocialLinks = links;
      });
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
