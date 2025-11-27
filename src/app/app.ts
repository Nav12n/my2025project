import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./home/home-page/home-page";
import { Counter } from "./home/counter/counter";
import { CounterApp } from "./signal/counter-app/counter-app";
import { HomePage2 } from "./home/home-page2/home-page2";
import { Component1 } from "./inandout/component1/component1";
import { Component2 } from "./inandout/component2/component2";
import { FormCar } from "./learn-Service/form-car/form-car";
import { ListCar } from "./learn-Service/list-car/list-car";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, Counter, CounterApp, HomePage2, Component1, Component2, FormCar, ListCar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
// carName:string[]=[];
//   oncarAdded(carname:any){
//     console.log(carname,'from component1');
//     this.carName.push(carname);
//   }
}
