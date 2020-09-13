import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  agencia:string;
  conta:string;
  senha:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  validarCampos(): boolean {
    let resultado:boolean = (this.agencia == '' || this.conta == '' || this.senha == '');
    return resultado;
  }
}
