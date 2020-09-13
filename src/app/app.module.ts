import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PortabilidadeExportacaoComponent } from './portabilidade-exportacao/portabilidade-exportacao.component';
import { PerguntaPortabilidadeComponent } from './pergunta-portabilidade/pergunta-portabilidade.component';
import { ResumoPortabilidadeComponent } from './resumo-portabilidade/resumo-portabilidade.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AberturaContaComponent } from './abertura-conta/abertura-conta.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { ConfuguracaoComponent } from './confuguracao/confuguracao.component';
import { EscolhaAberturaComponent } from './escolha-abertura/escolha-abertura.component';
import { PortabilidadeImportacaoComponent } from './portabilidade-importacao/portabilidade-importacao.component';
import { PerguntaAberturaComponent } from './pergunta-abertura/pergunta-abertura.component';
import { PrimeiroLoginComponent } from './primeiro-login/primeiro-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PortabilidadeExportacaoComponent,
    PerguntaPortabilidadeComponent,
    ResumoPortabilidadeComponent,
    LoginComponent,
    HomeComponent,
    AberturaContaComponent,
    NavegacaoComponent,
    ConfuguracaoComponent,
    EscolhaAberturaComponent,
    PortabilidadeImportacaoComponent,
    PerguntaAberturaComponent,
    PrimeiroLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
