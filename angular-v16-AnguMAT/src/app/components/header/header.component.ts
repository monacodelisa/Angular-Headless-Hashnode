import { Component, inject } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	blogName = "angular-v16-AnguMAT";
  themeService:ThemeService = inject(ThemeService);

	blogSocialLinks = [
		{
			"github": "https://github.com/",
			"website": "",
			"instagram": "https://instagram.com/",
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

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
