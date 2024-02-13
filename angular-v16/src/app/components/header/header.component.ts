import { Component, inject } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	blogName = "Blog Name";
  themeService:ThemeService = inject(ThemeService);

	socialLinks = [
    {
			url: "https://github.com",
			icon: "github",
		},
    {
			url: "https://linkedin.com",
			icon: "linkedin",
		},
		{
			url: "https://twitter.com",
			icon: "twitter",
		},
		{
			url: "https://facebook.com",
			icon: "facebook",
		},
	];

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
}
