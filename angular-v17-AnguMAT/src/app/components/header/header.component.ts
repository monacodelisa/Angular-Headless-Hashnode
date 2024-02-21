import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeService: ThemeService = inject(ThemeService);

  blogName: string = 'Angular Headless Hashnode';
  topics = [
    { name: 'Angular', route: '/angular' },
    { name: 'Web Dev', route: '/webdev' },
    { name: 'DS & Algo', route: '/dsa' },
  ];

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
