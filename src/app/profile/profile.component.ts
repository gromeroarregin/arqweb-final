import { Component } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  loginForm = this.formBuilder.group({          //Dar formato al formulario de login
    Usuario: [{
      value: this.loginService.getUsername(),
      disabled: this.loginService.isLogged()
    }],
    Email: [{
      value: this.loginService.getUsermail(),
      disabled: this.loginService.isLogged()
    }],
    Nombre: '',
    Direccion: '',
    Telefono: '',
  })

  constructor(public loginService: UserloginService, private formBuilder: FormBuilder){}

  onSubmit(): void{                             //Al enviar los datos
    console.warn('Datos actualizados correctamente', this.loginForm.value);
    window.alert("Datos actualizados correctamente");
  }

}
