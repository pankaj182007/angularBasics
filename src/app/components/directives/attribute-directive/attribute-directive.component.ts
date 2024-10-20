import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor:String="bg-primary";
  isDiv2Active:boolean=true;
  num1:String="";
  num2:String="";
  isDiv4Active:boolean=true;


  addRedClass(){
    this.div1BgColor="bg-danger";
  }

  addBlueClass(){
    this.div1BgColor="bg-primary";
  }

   toggleDiv2Class(){
    this.isDiv2Active=!this.isDiv2Active;
   }

}
