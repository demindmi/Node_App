import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedDetailRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    console.log(this.selectedDetailRecipe)
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.selectedDetailRecipe.Ingredients);
  }

}
