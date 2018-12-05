import { Injectable ,EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  
  ingredientsChanged = new EventEmitter<Ingredient[]>(); 

  private ingredients : Ingredient [] = [
    new Ingredient('Bananas', 3),
    new Ingredient('Chicken', 4)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient:Ingredient[]){
   this.ingredients.push(...ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
