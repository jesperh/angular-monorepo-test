import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '@angular-monorepo-test/ui';
import { ItemsList } from './items-list/items-list';
import { Item, Items } from '@angular-monorepo-test/shared-services';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ItemsList, ...MATERIAL_MODULES],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  itemsService = inject(Items);
  newItemName = signal('');

  purchasedItems = this.itemsService.purchasedItems;
  unPurchasedItems = this.itemsService.unPurchasedItems;
  totalItems = this.itemsService.totalItems;
  totalPurchased = this.itemsService.totalPurchased;
  totalUnPurchased = this.itemsService.totalUnPurchased;
  showPurchased = this.itemsService.showPurchased;

  addItem() {
    this.itemsService.addItem(this.newItemName());
    this.newItemName.set('');
  }

  togglePurchased(item: Item) {
    this.itemsService.togglePurchased(item);
  }
}
