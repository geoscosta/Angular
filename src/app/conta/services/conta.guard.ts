import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';

import { LocalStorageUtils } from './../../utils/localstorage';
import { CadastroComponent } from './../cadastro/cadastro.component';

@Injectable()
export class ContaGuard
  implements CanDeactivate<CadastroComponent>, CanActivate
{
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) {}

  canDeactivate(component: CadastroComponent) {
    if (component.mudancasNaoSalvas) {
      return window.confirm(
        'Tem certeza qeu deseja abandonar o preencimento do formulário ?'
      );
    }

    return true;
  }

  canActivate() {
    if (this.localStorageUtils.obterTokenUsuario()) {
      this.router.navigate(['/home']);
    }

    return true;
  }
}
