import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CursosService } from './cursos/cursos.service';
import { CursosModule} from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [ LogService
  //   // declarando uma instancia para a aplicação
  //   CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
