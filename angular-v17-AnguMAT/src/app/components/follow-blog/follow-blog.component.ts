import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-follow-blog',
  standalone: true,
  imports: [],
  templateUrl: './follow-blog.component.html',
  styleUrl: './follow-blog.component.scss',
})
export class FollowBlogComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('FollowBlogComponent initialized');

    // Get the username parameter from the route
    this.route.paramMap.subscribe((params) => {
      const username = params.get('username');
      console.log('Username:', username);

      // Redirect to the Hashnode page of the blog owner
      window.location.href = `https://hashnode.com/@${username}`;
    });
  }
}
