import { Menu } from './menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projindex',
  templateUrl: './projindex.component.html',
  styleUrls: ['./projindex.component.css']
})
export class ProjindexComponent {

  private menu: Menu;

  public onMenuReceived(menu: Menu) {
    this.menu = menu;
    console.log(`Index Menu Received is ${menu.getName()}`);
  }
}
