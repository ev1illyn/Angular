import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<Boolean>();

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    console.log('service');
    if (usuario.nome === 'usuario@gmail.com' &&
      usuario.senha === '123') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
      
    } else {

      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

}
