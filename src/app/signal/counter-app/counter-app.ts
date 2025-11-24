import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
count=signal(0);
doublecount:Signal<number>=computed(()=>this.count()*2)
increment(){
  this.count.set(this.count()+1);
}
decrement(){
  this.count.set(this.count()-1);
}

}
