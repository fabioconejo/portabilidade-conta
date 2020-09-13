import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-pergunta-abertura',
  templateUrl: './pergunta-abertura.component.html',
  styleUrls: ['./pergunta-abertura.component.css']
})
export class PerguntaAberturaComponent implements OnInit {
  private _numPergunta:number = 1;
  chavePortabilidade:string;
  codigoEmail:string;
  senha:string;
  confirmSenha:string;

  constructor() { 
    this.chavePortabilidade = '';
    this.codigoEmail = '';
    this.senha = '';
    this.confirmSenha = '';
  }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown();
  }

  ngAfterViewInit() {
    $('#pergunta-abertura-1').transition('fade');
    $('.ui.dropdown').dropdown();
  }

  anterior() {
    $('#pergunta-abertura-' + this._numPergunta).transition({
      animation:'fade',
      duration:0
    });
    
    this._numPergunta--;

    $('#pergunta-abertura-' + this._numPergunta).transition({
      animation:'fade right'
    });
  }

  proximo() {
    $('#pergunta-abertura-' + this._numPergunta).transition({
      animation:'fade',
      duration:0
    });
    
    this._numPergunta++;

    $('#pergunta-abertura-' + this._numPergunta).transition({
      animation:'fade left'
    });
  }

  exibirConfirmacao() {
    $('.modal-seguranca').modal('show');
  }

  concluir() {
    console.log();
  }

  validarChave():boolean {
    return this.chavePortabilidade == '';
  }

  validarCodigo():boolean {
    return this.codigoEmail == '';
  }

  validarSenha():boolean {
    return this.senha == '' || this.senha != this.confirmSenha;
  }
}
