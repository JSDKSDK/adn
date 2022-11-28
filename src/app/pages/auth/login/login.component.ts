import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models';
import { LoginService } from 'src/app/services/login.service';
import { mensajes, nombresModulos } from 'src/app/shared/constantes/constantes';
import { MessageBox, MessageBoxResult } from 'src/app/shared/services/message_box/message-box.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  form: FormGroup;
  public isSubmitted: boolean = false;

  constructor( private fb: FormBuilder,
    private authServi:LoginService
    ) {this.createForm(); }


  ngOnInit() {

  }
  createForm() {
    this.form = this.fb.group({
      usuario: ['',[Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    if (this.form.invalid) {
        MessageBox.showError(nombresModulos.login, mensajes.ErrorEnData,false)
        .then((result: MessageBoxResult) => {
          if (result == MessageBoxResult.Ok) {
          }
        })
      return;
    } else {
      let usuario = new Login(
        this.form.value.usuario,
        this.form.value.contrasena
      );
      
      this.authServi.login(usuario);
      this.isSubmitted=false;
      

    }  
  }



}
