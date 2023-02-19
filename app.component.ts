// app.component.ts
import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';
import { CreateItemComponent } from './src/app/create-item/create-item.component'
import { ModifyItemComponent } from './src/app/modify-item/modify-item.component'

@Component({
  selector: 'app-root',
  template: `
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
    // this.itemService.getItems().subscribe((items) => {console.log(items);return (this.items = items)});
    this.itemService.getItems2().then((items: any) => {
      this.items = items;
    });
  }
}
