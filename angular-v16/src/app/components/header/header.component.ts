import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	blogName = "Blog Name";

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
}
