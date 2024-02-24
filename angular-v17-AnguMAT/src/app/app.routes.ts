import { Routes } from '@angular/router';
import { FollowBlogComponent } from './components/follow-blog/follow-blog.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'follow-blog/:username', component: FollowBlogComponent },
];
