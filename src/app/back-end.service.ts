import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private postService: PostService, private http: HttpClient) {
    //
  }
  // fun 1 - Save
  saveData() {
    // ==== get list of post from post service
    const listOfPosts: Post[] = this.postService.getPosts();
    // ====send list of post to backend

    this.http
      .put(
        'https://live-posts-cc6fe-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
        return false;
      });
  }
  // fun 2 - Fetch
  fetchData() {
    this.http
      .get<Post[]>(
        ` https://live-posts-cc6fe-default-rtdb.firebaseio.com/posts.json`
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
