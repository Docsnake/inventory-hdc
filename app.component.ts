// app.component.ts
import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  template: `
    <login></login>
    <h1>Inventory App</h1>
    <create-item></create-item>
    <modify-item></modify-item>
    <item-list [items]="items"></item-list>
  `,
})
export class AppComponent {
  items: Item[];

  constructor(private itemService: ItemService) {
    console.log('AppComponent')
    this.itemService.getItems().subscribe((items) => {
      console.log(items);
      return (this.items = items);
    });
  }
}
