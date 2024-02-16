import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/post/post.component";

const routes: Routes = [
	{ path: "", component: PostsComponent },
  { path: "post/:slug", component: PostComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes), CommonModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
