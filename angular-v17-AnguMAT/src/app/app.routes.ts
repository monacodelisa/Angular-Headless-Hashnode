import { Routes } from '@angular/router';
import { FollowBlogComponent } from './components/follow-blog/follow-blog.component';

export const routes: Routes = [
  { path: 'follow-blog/:username', component: FollowBlogComponent },
];
