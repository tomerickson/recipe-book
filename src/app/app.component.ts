import { Component } from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[ShoppingListService]
})
export class AppComponent {
}
