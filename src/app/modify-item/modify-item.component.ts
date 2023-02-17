import { Component } from '@angular/core';
import { ItemService } from './../../../item.service';

@Component({
  selector: 'modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent {
  item: any = {
    id: '',
    name: 'Name',
    description: 'Description',
    quantity: 0,
    cost: 0,
    price: 0,
  };
  constructor(private itemService: ItemService){
  }
  modifyItem() {
    this.itemService.modifyItem(this.item).subscribe((response: any) => {
      console.log(response);
    });
  }
}
