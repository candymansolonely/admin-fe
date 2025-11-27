import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import {OnInit } from '@angular/core';

@Component({
  selector: '[app-menu]',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu implements OnInit {
  model: any[] = [];

  constructor() {

  }

  ngOnInit() {
    this.model = [
      {
        label: 'Branch manager',
        items: [
          {
            label: "Quản lý chi nhánh",
            icon: 'pi pi-fw pi-building',
            routerLink: ['']
          }
        ]
      },
      { separator: true },
    ];
  }
}
