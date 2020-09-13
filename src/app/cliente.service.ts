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

generateToken(){
    var nuToken = Math.round(Math. random()*1000000)
    if(nuToken < 100000)
        nuToken = nuToken + 100000    
    
    return btoa(nuToken.toString())
  }
  
  
  constructor() { 

  }
}
