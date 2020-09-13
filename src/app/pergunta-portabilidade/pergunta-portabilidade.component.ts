import { ClienteService } from './../cliente.service';

import { Component, OnInit } from '@angular/core';


declare var $;

@Component({
  selector: 'app-pergunta-portabilidade',
  templateUrl: './pergunta-portabilidade.component.html',
  styleUrls: ['./pergunta-portabilidade.component.css']
})
export class PerguntaPortabilidadeComponent implements OnInit {
  private _numPergunta:number = 1

  valorTranferencia:number;
  apenasDados:boolean = false;
  nomeBanco:string;
  motivoTag:string;
  motivoDetalhado:string;

  bancos = [
    "ITAÚ UNIBANCO S.A.", 
    "BANCO BRADESCO S.A.",
    "BANCO CREDIT SUISSE (BRASIL) S.A.",
    "BANCO DO BRASIL S.A.",
    "BANCO MORGAN STANLEY S.A.",
    "BANCO SANTANDER (BRASIL) S.A.",
    "DEUTSCHE BANK S.A.",
    "JPMORGAN CHASE BANK",
  ];

  motivos = [
    "Taxas e Ofertas", 
    "Atendimento",
    "Serviços Oferecidos",
    "Outros"
  ];

  constructor() { 

  }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown();
  }

  ngAfterViewInit() {
    $('#pergunta-1').transition('fade');
    $('.ui.dropdown').dropdown();
  }

  anterior() {
    $('#pergunta-' + this._numPergunta).transition({
      animation:'fade',
      duration:0
    });
    
    this._numPergunta--;

    $('#pergunta-' + this._numPergunta).transition({
      animation:'fade right'
    });
  }

  proximo() {
    $('#pergunta-' + this._numPergunta).transition({
      animation:'fade',
      duration:0
    });
    
    this._numPergunta++;

    $('#pergunta-' + this._numPergunta).transition({
      animation:'fade left'
    });
  }

  exibirConfirmacao() {
    $('.ui.mini.modal').modal('show');
  }

  finalizar() {
    this.nomeBanco = $('input[name ="banco"]').val();
    this.motivoTag = $('input[name ="motivo"]').val();

    if(this.apenasDados) {
      ClienteService.valorTranferencia = 0.00
    }
    else {
      ClienteService.valorTranferencia = this.valorTranferencia
    }
    
    ClienteService.nomeBanco = this.nomeBanco;
    ClienteService.motivoTag = this.motivoTag;
    ClienteService.motivoDetalhado = this.motivoDetalhado;
  }
}
