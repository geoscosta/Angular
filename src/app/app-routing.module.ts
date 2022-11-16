import { NotFoundComponent } from './navegacao/not-found/not-found.componet';
import { HomeComponent } from './navegacao/home/home.componet';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'conta',
    loadChildren: () => import('./conta/conta.module')
      .then(m => m.ContaModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
