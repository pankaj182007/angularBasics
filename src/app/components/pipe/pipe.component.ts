import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipePipe } from './customPipe/na-pipe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe,NaPipePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName:string="pankaj";
  fullName:string="pankaj singh";
  address:string="";

}
