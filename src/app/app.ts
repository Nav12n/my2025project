import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./home/home-page/home-page";
import { Counter } from "./home/counter/counter";
import { CounterApp } from "./signal/counter-app/counter-app";
import { HomePage2 } from "./home/home-page2/home-page2";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, Counter, CounterApp, HomePage2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
