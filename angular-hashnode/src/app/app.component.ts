import { Component, ChangeDetectorRef, OnDestroy } from "@angular/core";
import {MediaMatcher} from '@angular/cdk/layout';
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		HomeComponent,
		FooterComponent,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "Angular + Hashnode";
  snavIsOpen = true;
  mobileQuery: MediaQueryList;

  navItems = [
    { name: "Home", route: "home", icon: "home" },
    { name: "Demos", route: "demos", icon: "widgets" },
    { name: "About", route: "about", icon: "info" },
    { name: "Contact", route: "contact", icon: "email" },
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
