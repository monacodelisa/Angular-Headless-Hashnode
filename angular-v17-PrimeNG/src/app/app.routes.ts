import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/posts/posts.component')
      .then(c => c.PostsComponent)
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./components/post-details/post-details.component')
      .then(c => c.PostDetailsComponent)
  },
  {
    path: 'series/:slug',
    loadComponent: () => import('./components/series/series.component')
      .then(c => c.SeriesComponent)
  }
];
