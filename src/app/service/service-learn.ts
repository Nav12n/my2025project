import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceLearn {

  private carNamesSubject=new BehaviorSubject<string[]>([]);
  carNames$=this.carNamesSubject.asObservable();


  addcarName(name:string){
    const currentnames=this.carNamesSubject.getValue();
    const updateNames=[...currentnames,name];
    this.carNamesSubject.next(updateNames);
    
    
  }
}
