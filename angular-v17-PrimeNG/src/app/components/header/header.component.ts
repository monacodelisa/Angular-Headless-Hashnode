import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { Subscription } from "rxjs";
import { BlogService } from "../../services/blog.service";

import { KeyValuePipe } from '@angular/common';
import { SocialLinks } from "../../models/social-links";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
    FormsModule,
    KeyValuePipe,
    ToolbarModule,
    ButtonModule,
    InputSwitchModule
  ],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
  checked = 'true';
  blogInfo: any;
  blogName = '';
  blogSocialLinks!: SocialLinks;
  private querySubscription?: Subscription;
  blogService: BlogService = inject(BlogService);

	topics = [
		{ name: "Angular", route: "/angular" },
		{ name: "Web Dev", route: "/webdev" },
		{ name: "DS & Algo", route: "/dsa" },
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

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

}
