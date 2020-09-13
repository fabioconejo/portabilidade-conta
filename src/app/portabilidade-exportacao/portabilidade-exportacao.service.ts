import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortabilidadeExportacaoService {
  valorTranferencia:number;
  apenasDados:boolean = false;
  nomeBanco:string;
  motivoTag:string;
  motivoDetalhado:string;

  constructor() { }
}
