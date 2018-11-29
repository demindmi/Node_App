import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen; 

    // @HostListener('click') clicked(eventData: Event) {
    //     this.isOpen = !this.isOpen;   
    // }

    @HostListener('document:click', ['$event']) clickout(event) {
      if(this.eRef.nativeElement.contains(event.target)) {
        this.isOpen = !this.isOpen;
      } else {
        this.isOpen = false;
      }
    }
    constructor(private eRef: ElementRef) {
      this.isOpen = false;
    }
}