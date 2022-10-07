import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { Post } from '../types/Post'; //= then import post in like 11 through line 3

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = []; //we need to grab the post so you make variable posts: with a type Post[]
  chosenPost?: Post; //called a nullcheck? if its something or nothing. if null we do nothing if it's not nothing we do something.
  // the ? makes it optionl, we add ?: Post; because its just 1 post

  constructor(private placeholderService: PlaceholderService) {} //we have to now use our service
  //we already created it in the other section of our app and now need it for this
  //CONSTRUCTOR DEPENDENCY INJECTION
  //PRAVATE IS A CLASS
  // PLACEHOLDERSERVICE = A TYPE
  //"Private placeholderService: PlaceholderSerivice" ======= dependency injection
  // ^^ creates an object out of the placeholder.services.ts "export class PlaceholderService -------}" so you have access to it in post.component.ts class

  ngOnInit(): void {
    //ngOnInit() called by Angular to indicate that Angular is done with initializing the component.
    this.getPosts(); //don't forget to also put this to RENDER other than in app.component.html
  }

  choosePost(post: Post): void {
    //post: Post because we want to grab the post that we clicked
    //post: is the name of the parameter. ": POst" is the type
    console.log(post);
    this.chosenPost = post;
  }

  save(post: Post): void {
    this.placeholderService
      .updatePost(post)
      .subscribe((data) => console.log(data));
  }

  getPosts(): void {
    //this is a Method
    this.placeholderService
      .getPosts() //used this because placeholderserives has the post API >> BASE_URL

      // .getPosts() "" --this line (32-35) returns the observable which could be an array of posts
      // we're looking at an observable if there was an error or not an error
      .subscribe((data) => {
        //We subscribe to an observable to see if it got info
        console.log(data); //console.log to see if we get any information back
        this.posts = data; //make sure after you RENDER by going to app.component.html to RENDER
      });
  }
}

//what is an observable and what is
