import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.componet.html'
})
export class MenuComponent {
  public isCollapsed: boolean;

  constructor(){
    this.isCollapsed = true;
  }
}
