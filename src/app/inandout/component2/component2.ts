import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-component2',
  imports: [CommonModule],
  templateUrl: './component2.html',
  styleUrl: './component2.css',
})
export class Component2 {
@Input() carnames:string[]=[];
}
