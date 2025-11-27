import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TryCarservice } from '../../service/try-carservice';

@Component({
  selector: 'app-form-car',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-car.html',
  styleUrl: './form-car.css',
})
export class FormCar {
  carName:string='';
  constructor(private carService:TryCarservice){}
  onSubmit(){
    this.carService.addCarName(this.carName);
    this.carName='';
  }
}
