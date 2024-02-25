import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/posts/posts.component'),
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./components/post-detail/post-detail.component'),
  },
];
