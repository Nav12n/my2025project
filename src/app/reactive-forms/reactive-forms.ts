import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
name=new FormControl('');
updateName(){
  this.name.setValue("navin")
}


profileForm=new FormGroup({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  
});
onSubmit(){
  console.log(this.profileForm.value);
}

}
