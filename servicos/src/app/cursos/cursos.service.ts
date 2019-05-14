import { Injectable, EventEmitter } from '@angular/core';

import { LogService} from '../shared/log.service';

@Injectable()
export class CursosService {

    constructor(private logService: LogService){
        console.log('curso.service.ts');
    }

    // nao precisa instanciar classe para acessar o atributo
    // vai ser compartilhada entre as instâncias
    static criouNovoCurso = new EventEmitter<String>();

    private cursos: string[] = ['angular', 'java'];

    emitirCursoCriado = new EventEmitter<String>();

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}
