import { Component,EventEmitter,Output } from '@angular/core';
 
@Component({
    selector   : "app-header",
    templateUrl: "./header.component.html",
    // styleUrls  : "header.component.css"
})


export class HeaderComponent{

    //create new event menuClicked of type string and make it available to parent component with @Output
    @Output() menuClicked = new EventEmitter <string>();

    //when this function will get called, we will emit 'menuClicked' event with page as an argument
    onSelect(page:string){
        this.menuClicked.emit(page);
    }

}
