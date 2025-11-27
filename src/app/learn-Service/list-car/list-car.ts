import { Component } from '@angular/core';
import { TryCarservice } from '../../service/try-carservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-car',
  imports: [CommonModule],
  templateUrl: './list-car.html',
  styleUrl: './list-car.css',
})
export class ListCar {

  carName:string[]=[];
constructor(private carService:TryCarservice){}
ngOnInit():void{
  this.carService.carName$.subscribe((names)=>{
    this.carName=names;
  })
}
ondelete(i:any){
  this.carName.splice(i,1);
}
}
