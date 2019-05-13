import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    constructor(){
        console.log('curso.service.ts');
    }

    // nao precisa instanciar classe para acessar o atributo
    // vai ser compartilhada entre as instâncias
    static criouNovoCurso = new EventEmitter<String>();

    private cursos: string[] = ['angular', 'java'];

    emitirCursoCriado = new EventEmitter<String>();

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}
