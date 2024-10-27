import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  student:any={
    firstName:"",
    lastName:"",
    usreNmae:"",
    city:"",
    state:"",
    zip:"",
    isTermAscepted:false

  }

  resultObj:any;
required: any;

  onSubmit(){
    this.resultObj=this.student;
  }

  reset(){
    this.student={
      firstName:"",
      lastName:"",
      usreNmae:"",
      city:"",
      state:"",
      zip:"",
      isTermAscepted:false
  }

}
}
