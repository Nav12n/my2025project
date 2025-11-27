import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Posts, Postservice } from '../service/postservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FormsModule, CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post  {
Posts:Posts[]=[];
constructor(private ServicePost:Postservice){}
ngOnInit(){
this.ServicePost.getPosts().subscribe((data)=>{
  this.Posts=data;
});
}

newPost:Partial<Posts>={
  title:"",
  body:"",
  userId:1
}
onsubmit(){
this.ServicePost.createPost(this.newPost).subscribe((createdpost)=>{
this.Posts.unshift(createdpost);
this.newPost={
  title:'',
  body:'',
  userId:1
}
})
}

}
