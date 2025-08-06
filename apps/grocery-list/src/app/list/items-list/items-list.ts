import { Component, Input } from '@angular/core';
import { Item } from '../../services/items';
import { List } from '../list';
import { ListItem } from '../list-item/list-item';

@Component({
  selector: 'app-items-list',
  imports: [ListItem],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  @Input() items: Item[] = [];
  @Input() purchased = false;
}
