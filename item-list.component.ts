// item-list.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'item-list',
  template: `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.price }}</td>
          <td><a (click)="deleteItem(item.id)">delete</a></td>
        </tr>
      </tbody>
    </table>
  `,
})
export class ItemListComponent implements OnChanges {
  constructor(private itemService: ItemService){}
  @Input() items: Item[];
  ngOnChanges(changes: SimpleChanges) {
    console.log('items changed:', changes.items.currentValue);
  }
  deleteItem(itemId: string) {
    // this.http.delete(`/api/items/${itemId}`).subscribe(
    //   (res) => {
    //     console.log(res);
    //     // Remove the item from the local list of items
    //     this.items = this.items.filter((item) => item.id !== itemId);
    //   },
    //   (error) => console.error(error)
    // );
    this.itemService.deleteItem(itemId).subscribe(
        (res) => {
          console.log(res);
          // Remove the item from the local list of items
          this.items = this.items.filter((item) => item.id !== itemId);
        },
        (error) => console.error(error)
      );;
  }
}
