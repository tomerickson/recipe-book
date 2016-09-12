import {Ingredient} from '../shared/ingredient';
export class Recipe {
    imagePath: string;
    description: string;
    name: string;
    ingredients: Ingredient[];
    constructor(nameArg: string, descriptionArg: string, url: string, ingredient: Ingredient[]){
        this.name = nameArg;
        this.description = descriptionArg;
        this.imagePath = url;
        this.ingredients = ingredient;
    }
}
