import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  slug: string = "";

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params["slug"];
    });
  }
}
