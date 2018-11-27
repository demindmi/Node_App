import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient [] = [
    new Ingredient('Bananas', 3),
    new Ingredient('Chiken', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
