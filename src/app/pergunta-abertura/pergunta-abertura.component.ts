import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-pergunta-abertura',
  templateUrl: './pergunta-abertura.component.html',
  styleUrls: ['./pergunta-abertura.component.css']
})
export class PerguntaAberturaComponent implements OnInit {
  private _numPergunta:number = 1
  
  constructor() { }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown();
  }

  ngAfterViewInit() {
    $('#pergunta-abertura-1').transition('fade');
    $('.ui.dropdown').dropdown();
  }

  anterior() {
    $('#pergunta-' + this._numPergunta).transition({
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
    $('.ui.mini.modal').modal('show');
  }

  concluir() {
    console.log();
  }
}
