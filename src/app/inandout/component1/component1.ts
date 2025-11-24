import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component1',
  imports: [FormsModule,CommonModule],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {
 carname:string='';
@Output() carAdded=new EventEmitter<string>();

 onSubmit(){
  //console.log(this.carname);
  //sending the value outside component2
  this.carAdded.emit(this.carname);
  this.carname='';
 }

}
