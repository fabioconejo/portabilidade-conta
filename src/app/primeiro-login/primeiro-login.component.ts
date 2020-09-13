import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-primeiro-login',
  templateUrl: './primeiro-login.component.html',
  styleUrls: ['./primeiro-login.component.css']
})
export class PrimeiroLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    $('.primeiro-login').modal('show');
  }

}
