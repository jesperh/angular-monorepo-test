import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '@angular-monorepo-test/ui';
import { Item, Items } from '../services/items';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ...MATERIAL_MODULES],
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
  showPurchased = this.itemsService.showPurchased;

  setNewItemName = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.newItemName.set(input.value);
  };

  addItem() {
    this.itemsService.addItem(this.newItemName());
    this.newItemName.set('');
  }

  togglePurchased(item: Item) {
   this.itemsService.togglePurchased(item);
  }
}
