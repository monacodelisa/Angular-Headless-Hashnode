import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
  videoVolume = 0;

	goals = [
    {"name":"Develop a flexible template for Angular integration with headless Hashnode."},
    {"name":"Connect the Angular app to Hashnode's GraphQL database to retrieve posts and blog data."},
    {"name":"Support Angular versions 16 and 17 with Angular Material UI."},
    {"name":"Support Angular versions 16 and 17 with PrimeNG."},
    {"name":"Responsive layout improvements for different devices."},
  ];
	features = [
    {"name":"v16 & v17",
    "linkName":"Angular",
    "link": "https://angular.dev/"},
    {"name":"GraphQL Client for Angular",
    "linkName":"Appolo Angular",
     "link": "https://the-guild.dev/graphql/apollo-angular/docs"},
    {"name":"",
    "linkName":"Font Awesome Icons",
     "link": "https://fontawesome.com/"},
     {"name":"",
    "linkName":"Google Material Symbols and Icons",
     "link": "https://fonts.google.com/icons"},
     {"name":"",
    "linkName":"Google Fonts",
     "link": "https://fonts.google.com/"},
  ];
}
