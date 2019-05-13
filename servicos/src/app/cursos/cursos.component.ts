import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(private cursosservice: CursosService) {
    // this.cursosService = new CursosService();
    this.cursosService = cursosservice;
    }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // this.cursosService.emitirCursoCriado.subscribe(
    //   curso => console.log(curso)
    // );
    CursosService.criouNovoCurso.subscribe(
      // valor enviado via EventEmitter de uma instância CursosService
      curso => this.cursos.push(curso)
    );
  }

}
