import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structrual-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structrual-directive.component.html',
  styleUrl: './structrual-directive.component.css'
})
export class StructrualDirectiveComponent {
  isDiv1Visiable:boolean=false;
  isDiv2Visiable:boolean=false;
  num1:String="";
  num2:String="";
  isActive:boolean=false;

  showDiv1(){
    this.isDiv1Visiable=true
  }

  hideDiv1(){
    this.isDiv1Visiable=false
  }

  toggleDiv(){
    this.isDiv2Visiable=!this.isDiv2Visiable
  }

}
