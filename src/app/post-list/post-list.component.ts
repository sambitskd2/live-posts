import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];
  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    this.listOfPosts = this.PostService.getPosts();
    this.PostService.listChangedEvent.subscribe((listOfPost: Post[]) => {
      this.listOfPosts = listOfPost;
    });
  }
}
