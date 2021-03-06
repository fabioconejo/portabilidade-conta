import { PrimeiroLoginComponent } from './primeiro-login/primeiro-login.component';
import { PerguntaAberturaComponent } from './pergunta-abertura/pergunta-abertura.component';
import { PortabilidadeImportacaoComponent } from './portabilidade-importacao/portabilidade-importacao.component';
import { EscolhaAberturaComponent } from './escolha-abertura/escolha-abertura.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerguntaPortabilidadeComponent } from './pergunta-portabilidade/pergunta-portabilidade.component';
import { PortabilidadeExportacaoComponent } from './portabilidade-exportacao/portabilidade-exportacao.component';
import { ResumoPortabilidadeComponent } from './resumo-portabilidade/resumo-portabilidade.component';
import { HomeComponent } from './home/home.component';
import { ConfuguracaoComponent } from './confuguracao/confuguracao.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AberturaContaComponent } from './abertura-conta/abertura-conta.component';


const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
      path: 'portabilidade',
      component: PortabilidadeExportacaoComponent,
      children:[
        {
          path: 'perguntas',
          component: PerguntaPortabilidadeComponent
        },
        {
          path: 'resumo',
          component: ResumoPortabilidadeComponent
        }
      ]
      },
      {
        path: '',
        component: NavegacaoComponent,
        children:[{
          path: 'home',
          component: HomeComponent,
          children: [{
            path: 'primeira-vez',
            component: PrimeiroLoginComponent
          }]
        },
        {
          path: 'config',
          component: ConfuguracaoComponent
        }]
      },
      {
        path: 'abertura-conta',
        component: AberturaContaComponent,
        children: [{
          path: '',
          component: EscolhaAberturaComponent
        }, 
        {
          path:'portabilidade',
          component: PortabilidadeImportacaoComponent,
          children: [{
            path:'perguntas',
            component: PerguntaAberturaComponent
          }]
        }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
