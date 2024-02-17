import { Component, OnInit, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { ThemeService } from "../../services/theme.service";
import { HttpClient } from "@angular/common/http";
import { LiveSite } from "../../models/live-site";

@Component({
	selector: "app-demos",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./demos.component.html",
	styleUrl: "./demos.component.scss",
})
export class DemosComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  http: HttpClient = inject(HttpClient);

	liveSites17: LiveSite[] = [];
	liveSites16: LiveSite[] = [];

  ngOnInit(): void {
    this.http.get<LiveSite[]>("../../assets/JSON/live-sites-17.json").subscribe(data => {
      this.liveSites17 = data;
    });
    this.http.get<LiveSite[]>("../../assets/JSON/live-sites-16.json").subscribe(data => {
      this.liveSites16 = data;
    });
  }
}
