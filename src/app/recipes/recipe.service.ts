import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()

export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

   private recipes: Recipe[] = [];
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
}
