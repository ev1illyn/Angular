import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  
@HostBinding('style.backgroundColor') backgroundColor: string;

@Input() hightLightColor: string = 'yellow';
@Input() defaultColor: string = 'white';

@HostListener('mouseenter') onMouseOver() {
  this.backgroundColor = this.hightLightColor;
}

@HostListener('mouseleave') onMouseLeave() {
  this.backgroundColor = this.defaultColor;
}

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }


}
