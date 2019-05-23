import { AlunosService } from './../alunos/alunos.service';
import { Aluno } from './../alunos/aluno';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

    constructor(private alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any> | Promise <any>|any {

            let id = route.params['id'];

            return this.alunosService.getAluno(id);

        }

}
