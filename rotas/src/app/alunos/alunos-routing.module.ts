import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children : [
      { path: 'novo', component: AlunoFormComponent},
      { path: ':id', component: AlunoDetalheComponent},
      { path: ':id/edit', component: AlunoFormComponent}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
