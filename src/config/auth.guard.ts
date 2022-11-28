import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ConfigService } from 'src/config/config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private autService: ConfigService, private router: Router) {}

  canActivate() {
    if (this.autService.token) {
        //inicia sesion para devolver true
      return true;
    } else {
        //no conectado, redirigir a la pagina de sesion con e url de retorno
      this.router.navigate(['/login'], { replaceUrl: true });
      return false;
      
    }
  }
}
