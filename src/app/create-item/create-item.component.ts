import { Component } from '@angular/core';
import { ItemService } from './../../../item.service';

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  item: any = {
    name: 'Name',
    description: 'Description',
    quantity: 0,
    cost: 0,
    price: 0,
  };
  constructor(private itemService: ItemService){
  }
  createItem() {
    this.itemService.createItem(this.item).subscribe((response: any) => {
      console.log(response);
    });
  }
};
