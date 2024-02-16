import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ToolbarModule,ButtonModule, InputSwitchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  blogName = "Sample Blog";
  checked = true;

  topics = [
    { name: 'Angular', route: '/angular' },
    { name: 'Web Dev', route: '/webdev' },
    { name: 'DS & Algo', route: '/dsa' },
  ];

}
