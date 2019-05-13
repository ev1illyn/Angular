import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from '../cursos/cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
  ],
  // providers: [
  //   // declarando uma instancia para a aplicação
  //   CursosService
  // ],
  exports: [CursosComponent]
})
export class CursosModule { }
