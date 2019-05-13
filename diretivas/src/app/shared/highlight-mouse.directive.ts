import { Directive, HostListener, ElementRef, Renderer2
, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  // associa um atributo/classe do html pra uma variável
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver(){
    console.log('mouseover');
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor', 'white'
    // );
    this.backgroundColor = 'white';
  }
  constructor(){}
    // private elementRef: ElementRef,
    // private renderer: Renderer2) { }

}
