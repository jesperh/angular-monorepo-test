import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Item, Items } from '../../services/items';
import { MATERIAL_MODULES } from '@angular-monorepo-test/ui';

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
}
