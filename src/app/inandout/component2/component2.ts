import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ServiceLearn } from '../../service/service-learn';


@Component({
  selector: 'app-component2',
  imports: [CommonModule],
  templateUrl: './component2.html',
  styleUrl: './component2.css',
})
export class Component2 {
  //using decorator
//@Input() carnames:string[]=[];

//using service
carnames:string[]=[];
constructor(private carservice:ServiceLearn){}

ngOnInit():void{
  this.carservice.carNames$.subscribe(names=>{
    this.carnames=names;
  })
}

}
