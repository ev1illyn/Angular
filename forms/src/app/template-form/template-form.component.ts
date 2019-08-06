import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  endereco: any = {
    cep: null,
    numero: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null
  };

  constructor(private http: HttpClient) { }

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

  consultaCEP(cep, formulario) {

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      if (cep.length === 8) {

        this.resetaDados(formulario);

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => this.populaDados(dados, formulario));

      }
    }
  }
  populaDados(dados, formulario): void {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
  resetaDados(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  ngOnInit() {
  }

}
