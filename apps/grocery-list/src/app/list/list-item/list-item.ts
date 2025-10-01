import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { MATERIAL_MODULES } from '@angular-monorepo-test/ui';
import { Item, Items } from '@angular-monorepo-test/shared-services';

@Component({
  selector: 'app-list-item',
  imports: [...MATERIAL_MODULES],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {
  @Input() item!: Item;
  @Input() purchased = false;

  itemsService = inject(Items);

  togglePurchased(item: Item) {
    this.itemsService.togglePurchased(item);
  }

  increaseQuantity(item: Item) {
    this.itemsService.increaseQuantity(item);
  }

  decreaseQuantity(item: Item) {
    this.itemsService.decreaseQuantity(item);
  }
}
