import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { debug } from 'console';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any[]=[];
 

  //http=inject(HttpClient);
  //or
  constructor(private http:HttpClient){}

  getAllUser(){
   
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      
      this.userList=result;
    }
  )
  console.log(this.userList);
  }


}
