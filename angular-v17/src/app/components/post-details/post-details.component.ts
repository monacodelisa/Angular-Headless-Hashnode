import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClipboardCopyButtonDirective } from '../../directives/clipboard-copy-button.directive';
import { SanitizerHtmlPipe } from '../../pipes/sanitizer-html.pipe';
import { ThemeService } from '../../services/theme.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    AsyncPipe,
    DatePipe,
    SanitizerHtmlPipe,
    ClipboardCopyButtonDirective,
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  slug!: string;
  post$!: Observable<Post>;
  themeService: ThemeService = inject(ThemeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.post$ = this.blogService.getSinglePost(this.slug);
    });
  }

  toggleTheme(): void {
    this.themeService.updateTheme();
  }
}
