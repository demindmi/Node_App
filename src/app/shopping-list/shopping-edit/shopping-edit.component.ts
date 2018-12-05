import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppinglistService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputValue:ElementRef;
  @ViewChild('amountInput') amountInputValue:ElementRef;

  constructor(private ShoppinglistService:ShoppinglistService) { }

  ngOnInit() {
  }
  addItem(){
    const newIngredient = new Ingredient(this.nameInputValue.nativeElement.value, this.amountInputValue.nativeElement.value);
    this.ShoppinglistService.addIngredient(newIngredient)
  }
}
