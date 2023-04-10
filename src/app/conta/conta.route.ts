import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponet } from './conta.app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ContaGuard } from './services/conta.guard';

const contaRouterConfig: Routes = [
  {
    path: '', component: ContaAppComponet,
    children: [
      { path: 'cadastro', component: CadastroComponent, canActivate: [ContaGuard], canDeactivate: [ContaGuard] },
      { path: 'login', component: LoginComponent, canActivate: [ContaGuard]}
    ]
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(contaRouterConfig)
  ],
  exports: [RouterModule]
})

export class ContaRoutingModule {}
