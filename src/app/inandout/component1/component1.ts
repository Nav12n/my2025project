import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceLearn } from '../../service/service-learn';

@Component({
  selector: 'app-component1',
  imports: [FormsModule,CommonModule],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {
 carname:string='';
 //using decorator
//@Output() carAdded=new EventEmitter<string>();

//using car service
constructor(private carService:ServiceLearn){}

 onSubmit(){
  //console.log(this.carname);
  //sending the value outside component2
  //this.carAdded.emit(this.carname);

  //sending the value using car service
  this.carService.addcarName(this.carname);
  this.carname='';
 }

}
