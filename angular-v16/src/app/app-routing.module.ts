import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";

const routes: Routes = [
	{ path: "", component: PostsComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes), CommonModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
