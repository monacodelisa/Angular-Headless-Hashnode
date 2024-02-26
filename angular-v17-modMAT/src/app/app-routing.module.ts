import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
	{ path: "", component: PostsComponent },
  { path: "post/:slug", component: PostDetailsComponent },
  { path: "series/:slug", component: SeriesComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
