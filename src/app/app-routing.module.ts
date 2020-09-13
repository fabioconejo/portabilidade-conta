import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PerguntaPortabilidadeComponent } from './pergunta-portabilidade/pergunta-portabilidade.component';
import { PortabilidadeExportacaoComponent } from './portabilidade-exportacao/portabilidade-exportacao.component';
import { ResumoPortabilidadeComponent } from './resumo-portabilidade/resumo-portabilidade.component';

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
      children:[{
        path: 'perguntas',
        component: PerguntaPortabilidadeComponent
      },
      {
        path: 'resumo',
        component: ResumoPortabilidadeComponent
      }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
