import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children : [
      { path: 'novo', component: AlunoFormComponent},
      { path: ':id', component: AlunoDetalheComponent,
          resolve: { aluno: AlunoDetalheResolver }
        },
      { path: ':id/edit', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
    }
  ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
