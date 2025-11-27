import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Posts{
  id: number;
  title: string;
  body: string;
  userId: number;
}
@Injectable({
  providedIn: 'root',
})
export class Postservice {
  private apiurl="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {}
  //get-all
getPosts():Observable<Posts[]>{
  return this.http.get<Posts[]>(this.apiurl);
}
//get-by-id
getPostById(id:number):Observable<Posts>{
  return this.http.get<Posts>(`${this.apiurl}/${id}`);
}
//add-new-post
createPost(post:Partial<Posts>):Observable<Posts>{
  return this.http.post<Posts>(this.apiurl,post);
}
//update-post
updatePost(id:number,post:Partial<Posts>):Observable<Posts>{
  return this.http.put<Posts>(`${this.apiurl}/${id}`,post);
}
//delete-post
deletePost(id:number):Observable<any>{
  return this.http.delete<Posts>(`${this.apiurl}/${id}`);
}

}
