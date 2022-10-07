export interface Post {
  //remember Export! so you can import it into multiple places. if you forget, your app will never know about it.
  userID: number;
  id: number;
  title: string;
  body: string;
}

//will indicate post "type"
// similar to object in JS?
