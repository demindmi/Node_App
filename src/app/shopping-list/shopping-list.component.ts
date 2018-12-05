import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppinglistService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient [] = [];

  constructor(public shoppinglistService:ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
        (gotIngredients:Ingredient[]) => {
          this.ingredients = gotIngredients;
        }
    )
  }

}
