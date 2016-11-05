import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()

export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  /* private text1 = `3 cups|all-purpose flour
 2 tablespoons|baking powder
 2 teaspoons|kosher salt
 10 tablespoons|ice cold unsalted butter shredded on a grater
 3/4 cup|sliced green onions
 1 cup|whole milk
 3|eggs
 1 tablespoon|unsalted butter
 1 pkg|(32 oz each) pasteurized prepared cheese product, cut into 1" chunks
 4 ounces|cream cheese
 2 cans|(10 oz each) Ro*Tel Original Diced Tomatoes & Green Chilies, drained
 1/2 cup|small diced sweet onion`;
 
   private text2 = `3|boneless skinless chicken breasts
 3/4 cup|sliced green onions
 1 cup|La Choy Soy Sauce
 3 tablespoons|gochujang
 2 tablespoons|seasoned rice vinegar
 1/4 cup|Hunt's Tomato Ketchup
 4|cloves finely minced garlic
 3 tablespoons|firmly packed light brown sugar
 2 cups|sliced napa cabbage
 1|medium red bell pepper, thinly sliced
 1|medium yellow or orange bell pepper, thinly sliced
 1/2|medium cucumber, thinly sliced
 2|thinly sliced green onions
 1/2 cup|fresh cilantro
 1/4 cup|seasoned rice vinegar
 1 teaspoon|granulated sugar
 1 teaspoon|La Choy Soy Sauce
 1 tablespoon|toasted sesame oil
 12|white corn tortillas (6 inch)`;*/

  //private dummy1Ingredients: Ingredient[] = this.splitStrings(this.text1);
  //private dummy2Ingredients: Ingredient[] = this.splitStrings(this.text2);
  private recipes: Recipe[] = [];/* = [
    new Recipe('dummy1', 'Korean BBQ Chicken Tacos with Sweet Coleslaw',
      'http://consumerrecipe.conagrafoods.com/uploadedImages/img_8181_9286.jpeg', this.dummy1Ingredients),
    new Recipe('dummy2', 'Egg, Sausage and Queso Breakfast Sandwiches',
      'http://consumerrecipe.conagrafoods.com/uploadedImages/img_8184_9283.jpeg', this.dummy2Ingredients)];*/

  constructor(private http: Http) {

  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  public editRecipe(newRecipe: Recipe, oldRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
  public deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-d05e5.firebaseio.com/recipes.json',
      body, { headers: headers });
  }

  fetchData() {
    return this.http.get('https://recipebook-d05e5.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe((data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      });
  }

  /*private splitStrings(multilineString: string): Ingredient[] {
    let result: Ingredient[] = [];
    let stringArray = multilineString.split('\n');

    for (let i = 0; i < stringArray.length; i++) {
      let text = stringArray[i];
      let check = text.match(/^(.*?)\|(.*?)$/);

      if (!check) {
        throw new Error('Invalid input: ' + text);
      }

      result.push(new Ingredient(check[2], check[1]));
    }
    return result;
  }*/
}
