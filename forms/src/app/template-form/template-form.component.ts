import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    // cep: null,
    // numero: null,
    // rua: null,
    // bairro: null,
    // cidade: null,
    // estado: null
    };

  constructor() { }

  onSubmit(form) {
    // this.usuario = form.value;
    console.log(form.value);
    // console.log(this.usuario);
  }

  verificaCampos(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaCampos(campo),
      'has-feedback': this.verificaCampos(campo)
    };
  }

  ngOnInit() {
  }

}
