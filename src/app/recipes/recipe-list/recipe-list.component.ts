import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  providers: [RecipeService]
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.recipeService = null;
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
