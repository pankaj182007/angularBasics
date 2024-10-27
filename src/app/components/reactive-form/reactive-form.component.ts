import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl(""),
    userName:new FormControl("",[Validators.email]),
    city:new FormControl(""),
    state:new FormControl(""),
    zip:new FormControl(""),
    isTermAscepted:new FormControl(false)
  })

  saveData:any;

  onSave(){
this.saveData=this.studentForm.value;
  }

  reset(){
    this.studentForm.reset("")   
    this.saveData="";
    
  }

}
