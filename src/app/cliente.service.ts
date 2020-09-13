import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //info base cliente
  static id:number;
  static nomeCliente:string;
  static cpfCliente:string;
  
  //perguntas portabilidade
  static valorTranferencia:number;
  static apenasDados:boolean = false;
  static nomeBanco:string;
  static motivoTag:string;
  static motivoDetalhado:string;
  static chavePortabilidade:string;

  
  
  constructor() { 

  }
}
