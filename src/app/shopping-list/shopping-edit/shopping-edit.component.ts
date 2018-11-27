import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputValue:ElementRef;
  @ViewChild('amountInput') amountInputValue:ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  addItem(){
    const newIngredient = new Ingredient(this.nameInputValue.nativeElement.value, this.amountInputValue.nativeElement.value);
    this.IngredientAdded.emit(newIngredient);
  }
}
