import { Component, OnInit, OnDestroy, inject } from "@angular/core";
import { Subscription } from "rxjs";
import { BlogService } from "src/app/services/blog.service";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogInfo: any;
	blogName = "";
  blogSocialLinks: [] = [];
  private querySubscription?: Subscription;
  themeService:ThemeService = inject(ThemeService);
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
      name: "JavaScript",
      route: "/javascript",
    },
    {
      name: "Web Development",
      route: "/web-dev",
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
  ]

  toggleTheme() {
    this.themeService.updateTheme();
  }

  ngOnInit(): void {
    this.querySubscription = this.blogService.getBlogInfo().subscribe((data) => {
      this.blogInfo = data;
      this.blogName = this.blogInfo.title;
      this.blogSocialLinks = data.links;
      console.log(this.blogSocialLinks);
    });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
