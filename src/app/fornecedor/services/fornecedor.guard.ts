import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { BaseGuard } from 'src/app/services/base.guard';

import { NovoComponent } from '../novo/novo.component';

@Injectable()
export class FornececedorGuard extends BaseGuard implements CanActivate, CanDeactivate<NovoComponent> {

  constructor(protected override router: Router){ super(router); }

    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot) {
      return super.validarClaims(routeAc);
  }
}
