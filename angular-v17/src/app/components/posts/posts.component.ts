import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'This is the first post'
    },
    {
      title: 'Post 2',
      content: 'This is the second post'
    }
  ];
}
