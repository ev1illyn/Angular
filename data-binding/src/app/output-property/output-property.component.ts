import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'], 
// tslint:disable-next-line: use-output-property-decorator
  outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // associando variavel do template com a do componente
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput.nativeElement.value);
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    console.log(this.campoValorInput.nativeElement.value);
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
