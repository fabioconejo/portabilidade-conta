import { ClienteService } from './../cliente.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-resumo-portabilidade',
  templateUrl: './resumo-portabilidade.component.html',
  styleUrls: ['./resumo-portabilidade.component.css']
})
export class ResumoPortabilidadeComponent implements OnInit {
  private chavePortabilidade:string = "SGFja2FTYWZyYSAyMDIw";
  private nomeCliente:string;
  private cpfCliente:string;
  private valorTranferencia:number;
  private apenasDados:boolean = false;
  private nomeBanco:string;

  constructor() { 
    this.nomeCliente = ClienteService.nomeCliente;
    this.cpfCliente = ClienteService.cpfCliente;
    this.valorTranferencia = ClienteService.valorTranferencia;
    this.apenasDados = ClienteService.apenasDados;
    this.nomeBanco = ClienteService.nomeBanco;
    this.chavePortabilidade = ClienteService.chavePortabilidade;
  }

  ngOnInit(): void {
      
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
