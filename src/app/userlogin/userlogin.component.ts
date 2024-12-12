import { Component } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  loginForm = this.formBuilder.group({          //Dar formato al formulario de login
    Usuario: '',
    Email: ''
  })

  constructor(private loginService: UserloginService, private formBuilder: FormBuilder, public router: Router){}

  onSubmit(): boolean{                             //Al iniciar sesion
    let uname = this.loginForm.value.Usuario;
    let umail = this.loginForm.value.Email;

    if (uname !== undefined && uname !== null){    //Revisar que los valores sean validos
      if (umail !== undefined && umail !== null){
        let result = this.loginService.login(uname, umail);    //El servicio de login tambien verifica los valores
        if (result){
        console.warn('Inicio de sesion correcto', this.loginForm.value);
        this.loginForm.reset();
        this.router.navigate(['/']);
        }
        return result;
      }
      else{
        window.alert("Ingrese un email valido");
        return false;
      }
    }
    else{
      window.alert("Ingrese un nombre de usuario valido");
      return false;
    }
  }
}
