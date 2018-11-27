import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf'),
    new Recipe('Second Test', 'Still not real', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ]; //hold our recipes (array of our recipes models defined in recipe.model.ts)
  @Output() SelectedReceipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecepieSelected(singeRecipe:Recipe){
    this.SelectedReceipe.emit(singeRecipe);
  }

}
