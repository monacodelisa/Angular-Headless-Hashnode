import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  blogName = "Angular v17";
  themeService:ThemeService = inject(ThemeService);

  topics = [
    { name: 'Angular', route: '/angular' },
    { name: 'Web Dev', route: '/webdev' },
    { name: 'DS & Algo', route: '/dsa' },
  ];

  ngOnInit(): void {
    console.log('HeaderComponent initialized');
  }

  toggleTheme() {
    this.themeService.updateTheme();
  }

  ngOnDestroy() {
    console.log('HeaderComponent destroyed');
  }
}
