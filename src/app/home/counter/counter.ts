import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
count=0;
increment(){
  this.count++;
  setTimeout(()=>{
    this.count=0;
  },5000)
}
decrement(){
  if (this.count>0) {
    this.count--;
  }
  
  setTimeout(()=>{
    this.count=0;
  },5000)
}
}
