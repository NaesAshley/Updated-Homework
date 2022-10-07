import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './types/Post';
// most of the time - used to abstract or decouple functionality to get started
@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }), //this is hardcoded
  };

  constructor(private http: HttpClient) {}
  // creates an interface almost like an object and class
  //private http: httpClient ========== "dependency injection"
  // this creates a new object, and names it http. NOW we have function that we didn't have before

  getPosts(): Observable<Post[]> {
    //THIS IS A METHOD TO GET POSTS WITH IT'S RETURN TYPE AS "OBSERVABLE"
    //OBSERVABLE ===object that you check and recheck something that could be or could not be
    //we use observables because apo reqiests cam fail such as network lag, wifi drop, etc. soooo....
    //we need to "observe" whether or not something came back to you
    //observable is looking to expect an array of posts indicated by "Post[]"

    return this.http.get<Post[]>(this.BASE_URL + 'posts');
    // "this.base_url" means the string above
    // this line doesn't do anything but return an observable
    // either it is
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(
      this.BASE_URL + 'posts/' + post.id,
      post,
      this.httpOptions
    );
  }
}

//what happens in the service??
//Simply put, services in Angular let you define code or functionalities...
//that are then accessible and reusable in many other components in your Angular project.
