import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../implementation/http-client.service';
import { Login } from '../models';
import { Usuario } from '../models/Usuario.model';
import { API_URI_LOGIN } from '../shared/constantes/api-routes';
import { nombresModulos } from '../shared/constantes/constantes';
import { MessageBox } from '../shared/services/message_box/message-box.service';
import { MetodosGenericosutil } from '../shared/utils/metodosgenericos-util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClientService,
    private router: Router,
    ) { }


  login(usuario:Login):Usuario  {
    var Params = new URLSearchParams();
    Params.append('user', usuario.user);
    Params.append('password',MetodosGenericosutil.encriptar(usuario.password));

    this.http.posturlencoded(API_URI_LOGIN, Params).subscribe(
      (res: any) => {       
        switch (res.status) {
          case 200:
            this.contiuaLogin(res);
            break;
          default:
            break;
        }
      },
      (err) => {
        // Entra aquí si el servicio entrega un código http de error EJ: 401,404,500
        MessageBox.showError(nombresModulos.App,'Error al inicar sesion',true);
      }
    );

    return new Usuario(1,'Admin','Admin@qacentral.com',1,'sdfsdfsdfsdfsd');
    
   }

   contiuaLogin(res: any) {
    localStorage.setItem('tokenAdmin', res.headers.get('Access-Token'));
    this.router.navigate(['/'], { replaceUrl: true });
    MessageBox.showSuccess(nombresModulos.App, "Bienvenido", false);
    
  }

  getcerrarSesion() {
    localStorage.clear();
    location.reload();
  }

}
