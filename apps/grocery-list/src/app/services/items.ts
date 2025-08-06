import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Items {
  private state = signal<ItemsState>({
    items: [
      { name: 'potatoes', quantity: 1, purchased: false },
      { name: 'carrots', quantity: 1, purchased: false },
    ],
    showPurchased: true,
  });

  totalItems = computed(() => this.state().items.length);
  totalPurchased = computed(() => this.purchasedItems().length);
  showPurchased = computed(() => this.state().showPurchased);
  purchasedItems = computed(() => {
    return this.state().items.filter((item) => item.purchased);
  });
  unPurchasedItems = computed(() => {
    return this.state().items.filter((item) => !item.purchased);
  });

  addItem(name: string) {
    const newItem: Item = {
      name,
      quantity: 1,
      purchased: false,
    };
    this.state.update((state) => ({
      ...state,
      items: [...state.items, newItem],
    }));
  }

  togglePurchased(item: Item) {
    this.state.update((state) => ({
      ...state,
      items: state.items.map((i) => (i.name === item.name ? { ...i, purchased: !i.purchased } : i)),
    }));
  }
}

export interface Item {
  name: string;
  quantity: number;
  purchased: boolean;
}

interface ItemsState {
  items: Item[];
  showPurchased: boolean;
}
