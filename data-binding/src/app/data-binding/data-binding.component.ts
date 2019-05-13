import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://evillyn.com';

  cursoAngular: boolean = true;

  urlImagem = "https://picsum.photos/id/237/200/300";

  valorAtual: String = '';

  valorSalvo: String = '';

  isMouseOver=false;

  nome: String = "abc";

  nomeDoCurso: String = 'Angular';

  /*valor inicial do contador*/
  valorInicial = 15;

  
  pessoa: any = {
    nome: 'Evillyn',
    idade: 20
  }

  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 22;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
