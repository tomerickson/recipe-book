import { Injectable } from '@angular/core';
import { Ingredient } from '../shared';

@Injectable()

export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems(): Ingredient[] {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
}
