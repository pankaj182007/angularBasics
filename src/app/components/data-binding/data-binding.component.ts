import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name:string="Pankaj";
  age=27;
  states="";
  myName=signal("Pushpendra singh");

  constructor(){}

  changeName()
  {
    this.name="Pushpendra singh";
    this.myName.set("Amit Kumar");
  }

  msgAlert(){
    alert(this.name);
  }

}
