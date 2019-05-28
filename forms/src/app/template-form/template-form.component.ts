import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'evillyn',
    email: 'evillyndsoliveiras@gmail.com'
    }

  constructor() { }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  ngOnInit() {
  }

}
