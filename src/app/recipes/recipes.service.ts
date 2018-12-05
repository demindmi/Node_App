import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe(
      'Yum Chicken', 
      'Delicious but dangerous', 
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
      [ 
        new Ingredient('Chicken',1),
        new Ingredient('Spinach',3)
    ]),
    new Recipe(
      'Shroom Pizza', 
      "It's pretty good, but what do I know", 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Dough',1),
        new Ingredient('Tomatoes',3)
      ]),
    // new Recipe('Lemony Chiken Soup', "Why would you ever eat this", 'https://www.twopeasandtheirpod.com/wp-content/uploads/2013/01/Lemon-Chicken-Orzo-Soup4.jpg'),
    // new Recipe('Beefy Enchilada', "One-Skillet Beefy Enchilada Noodle Casserole", 'https://d2droglu4qf8st.cloudfront.net/2016/03/270738/recipe-27848_ArticleImage-CategoryPage_ID-1541922.jpg?v=1541922'),
    // new Recipe('Wheat Berry Salad', "When normal salad is not cutting it any more", 'https://www.presidentschoice.ca/content/dam/lclonline/images/recipes/pc_wintersquashandwheatberrysalad_r_500x500.jpg.thumb.405.674.margin.png')
    
  ]; //hold our recipes (array of our recipes models defined in recipe.model.ts)
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService:ShoppinglistService) { }

  getRecipes(){//we need this methods since we set recipes to be private in order to omit outside modification
    return this.recipes.slice(); //we return it like this because if we simply return this.recipes, we know that arrays in js are 
    //references and we will return a reference(Pointer) to our array, which again if modified will modify the original - we dont want it.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);
  }
}
