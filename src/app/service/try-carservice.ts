import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TryCarservice {
  
private carNameSubject=new BehaviorSubject<string[]>([]);
carName$=this.carNameSubject.asObservable();

  addCarName(carName:string){
    const currentName=this.carNameSubject.getValue();
    const updateName=[...currentName,carName];
    this.carNameSubject.next(updateName);
  }
}
