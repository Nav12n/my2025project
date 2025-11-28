import { Routes } from '@angular/router';
import { HomePage } from './home/home-page/home-page';
import { Counter } from './home/counter/counter';
import { HomePage2 } from './home/home-page2/home-page2';
import { Post } from './http/post/post';
import { Component1 } from './inandout/component1/component1';
import { Component2 } from './inandout/component2/component2';
import { ReactiveForms } from './reactive-forms/reactive-forms';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomePage},
    {path:'counter',component:Counter},
    {path:'home-2',component:HomePage2},
    {path:'http',component:Post},
    {path:'inandout-1',component:Component1},
    {path:'inandout-2',component:Component2},
    {path:'reactive-form',component:ReactiveForms}
];
