import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
count=0;
name:string='navin';
onclick(){
  this.count++;
  setTimeout(() => {
    this.count=0;
    }, 5000);
}
onclickminus(){
  this.count--;
  setTimeout(() => {
  this.count=0;
  }, 5000);
}

getname(){
  return this.name;
}

user={
  name:"navin1",
  age:25
}

}
