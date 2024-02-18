import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	blogName = "angular-v16-AnguMAT";

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
}
