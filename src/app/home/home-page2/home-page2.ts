import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Highlightdiretives } from '../../highlightdiretives';

@Component({
  selector: 'app-home-page2',
  imports: [CommonModule, FormsModule,Highlightdiretives],
  templateUrl: './home-page2.html',
  styleUrl: './home-page2.css',
})
export class HomePage2 {
movies=[
  'gogre',
  'billioniers bunker',
  'the dark',
  'breaking bad'
];

fruits=['mango','orange','apple','kiwi'];

showme=false;
applyred=false;

toDate=new Date();
title="hello world" ;
}
