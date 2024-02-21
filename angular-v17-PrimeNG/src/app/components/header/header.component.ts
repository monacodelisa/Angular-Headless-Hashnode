import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ToolbarModule, ButtonModule, InputSwitchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  blogName: string = 'Sample Blog';
  checked: boolean = true;
  selectedTheme: string = 'dark';
  themeService: ThemeService = inject(ThemeService);
  topics = [
    {name: 'Angular', route: '/angular'},
    {name: 'Web Dev', route: '/webdev'},
    {name: 'DS & Algo', route: '/dsa'},
  ];

  ngOnInit(): void {
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string): void {
    this.themeService.setTheme(theme);
  }
}
