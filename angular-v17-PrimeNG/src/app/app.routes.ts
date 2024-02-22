import { Routes } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/posts/posts.component')
      .then(c => c.PostsComponent)
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./pages/post-detail/post-detail.component')
      .then(c => c.PostDetailComponent)
  },
  {
    path: 'series/:slug', component: SeriesComponent,
  }
];
