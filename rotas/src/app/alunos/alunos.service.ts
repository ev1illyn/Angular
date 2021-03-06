import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno1@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno2@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno3@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }

    }
    return null;
  }

  constructor() { }
}
