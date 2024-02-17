import { Component, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { ThemeService } from "../../services/theme.service";

@Component({
	selector: "app-demos",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./demos.component.html",
	styleUrl: "./demos.component.scss",
})
export class DemosComponent {
  themeService: ThemeService = inject(ThemeService);

	liveSites16 = [
		{
      imageDark: "../../../assets/images/angular-v16-dark-hashnode.jpg",
      imageLight: "../../../assets/images/angular-v16-light-hashnode.jpg",
			version: "v16",
			uiLib: "none",
			dynamicTheme: "yes",
			deployment: "Netlify",
			url: "https://angular-v16-hashnode.monacodelisa.com/"
		},
		{
			version: "v16",
			uiLib: "Angular Material",
			dynamicTheme: "yes",
      deployment: "Netlify",
			url: ""
		},
		{
			version: "v16",
			uiLib: "PrimeNG",
			dynamicTheme: "yes",
      deployment: "Netlify",
			url: ""
		}
	];
}
