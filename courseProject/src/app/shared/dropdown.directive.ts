import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen: boolean = false;

  constructor(private element: ElementRef) {
  }

  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.element.nativeElement.querySelector('.dropdown-menu').classList.add('show')
    } else {
      this.isOpen = false;
      this.element.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
  }
}
