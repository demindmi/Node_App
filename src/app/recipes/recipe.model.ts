import { Ingredient } from '../shared/ingredients.model';
export class Recipe {
    public name        : string;
    public description : string;
    public imagePath   : string; //can't store images 
    public Ingredients: Ingredient[];

    constructor(name:string, desc:string, image:string, ingr:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.Ingredients = ingr;
    }
}