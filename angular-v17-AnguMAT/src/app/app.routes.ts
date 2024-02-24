import { Routes } from '@angular/router';
import { FollowBlogComponent } from './components/follow-blog/follow-blog.component';

export const routes: Routes = [


  {
    path: '',
    loadComponent: () => import('./components/posts/posts.component'),
  },
  
  { path: 'follow-blog/:username', component: FollowBlogComponent },
  {
    path: 'post/:slug',
    loadComponent: () => import('./components/post-detail/post-detail.component'),
  },

];
