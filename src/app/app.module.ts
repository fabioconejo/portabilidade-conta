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


@NgModule({
  declarations: [
    AppComponent,
    PortabilidadeExportacaoComponent,
    PerguntaPortabilidadeComponent,
    ResumoPortabilidadeComponent,
    LoginComponent,
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
