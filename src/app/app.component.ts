import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageToLoad:string = 'recipe'

  render(pageName:string){
    this.pageToLoad = pageName;
  }
}
