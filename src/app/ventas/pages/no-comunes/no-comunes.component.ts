import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string="Sara";
  genero:string="femenino";

  invitacionobj= {
    'femenino':'invitarla',
    'masculino':'invitarlo'
  }

  cambiarPersona(){
    if(this.nombre=="Sara"){
      this.nombre="Juan";
      this.genero="masculino";
    }else{
      this.nombre="Sara";
      this.genero="femenino";
    }
  }

  //i18nPlural
  
  clientes:string[]=["maria","Andres","pedro"];


  clientesMapa={
    "=0":"no tenemos ningun cliente esperando",
    "=1":"tenemos 1 cliente esperando",
    //"other": "tenemos "+this.clientes.length+" clientes esperando"
    "other": "tenemos  # clientes esperando"
  }
  adicionarCliente(){
    this.clientes.push("Cliente "+ this.clientes.length)
  }
  retiraraCliente(){
    this.clientes.pop();
  }
}

