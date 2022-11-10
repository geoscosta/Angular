import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.componet';
import { HomeComponent } from './home/home.componet';
import { MenuComponent } from './menu/menu.componet';
import { NotFoundComponent } from './not-found/not-found.componet';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class NavegacaoModule { }
