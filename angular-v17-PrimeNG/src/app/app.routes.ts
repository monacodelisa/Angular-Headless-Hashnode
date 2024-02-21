import { Routes } from '@angular/router';

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
];
