import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|boolean {

        console.log('guarda de rota filha');
        console.log(route);
        console.log(state);

        // Verifica se o usuário está tentando editar
        if (state.url.includes('edit')) {
            // return false;
        }
        return true;
    }

}
