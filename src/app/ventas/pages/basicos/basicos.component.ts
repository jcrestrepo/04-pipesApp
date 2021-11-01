import { Component } from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower:string='juan carlos';
  nombreUpper:string='JUAN CARLOS';
  nombreCompleto:string='Juan CArLos';

  
  fecha:Date=new Date();

  constructor() { }



}
