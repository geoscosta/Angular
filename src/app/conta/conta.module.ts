import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponet } from './conta.app.component';
import { ContaRoutingModule } from './conta.route';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    ContaAppComponet
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContaModule { }
