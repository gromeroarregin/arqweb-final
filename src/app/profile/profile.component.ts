import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  username: any;
  mail: any;

  loginForm = this.formBuilder.group({          //Dar formato al formulario de login
    Usuario: [{
      value: "",
      disabled: true
    }],
    Email: [{
      value: "",
      disabled: true
    }],
    Nombre: '',
    Direccion: '',
    Telefono: '',
  })

  constructor(public loginService: UserloginService, private formBuilder: FormBuilder, public _auth: AuthService){}

  ngOnInit(): void {
    if (this.loginService.isLogged()){
      this.username = this.loginService.getUsername();
      this.mail = this.loginService.getUsermail();
      this.loginForm.controls['Usuario'].setValue(this.username);
      this.loginForm.controls['Email'].setValue(this.mail);
    }
    else{
      this.getData();
    }
  }

  onSubmit(): void{                             //Al enviar los datos
    console.warn('Datos actualizados correctamente', this.loginForm.value);
    window.alert("Datos actualizados correctamente");
  }

  async getData(){
    this._auth.user$.subscribe(value => {
      this.username=value?.name; 
      this.mail=value?.email; 
      this.loginForm.controls['Usuario'].setValue(this.username);
      this.loginForm.controls['Email'].setValue(this.mail);
    });
    console.log(this.username)
    console.log(this.mail)
  }

}
