import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {link: 'auctions', title: 'Aukcje'},
    {link: 'promotions', title: 'Promocje'},
    {link: 'adivces', title: 'Podpowiadamy'},
  ];
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
