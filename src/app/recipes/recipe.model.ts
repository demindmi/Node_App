export class Recipe {
    public name        : string;
    public description : string;
    public imagePath   : string; //can't store images 

    constructor(name:string, desc:string, image:string){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
    }
}