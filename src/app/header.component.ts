import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './recipes';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) {

   }

   onStore(){
     this.recipeService.storeData().subscribe(
       data => console.log(data),
       error => console.error(error)
     );
   }
   onFetch() {
     this.recipeService.fetchData();
   }
}
