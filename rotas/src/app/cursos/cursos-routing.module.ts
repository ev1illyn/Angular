import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent, children : [
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: ':id', component: CursoDetalheComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
