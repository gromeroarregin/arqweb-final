import { Injectable } from '@angular/core';

//Esta clase maneja el login simulado

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  logged: boolean = false;
  userName: string = "";
  userMail: string ="";
  
  //Metodos
  login(uName:string, uMail:string): boolean{
    if (uName != "")
      if (uMail != ""){
        this.userName = uName;
        this.userMail = uMail;
        this.logged = true;
        return true;
      }
      else{
        window.alert("El email no puede estar vacio");
        return false;
      }
    else{
      window.alert("El nombre de usuario no puede estar vacio");
      return false;
    }
  }

  logout(){
    this.userName = "";
    this.userMail = "";
    this.logged = false;
  }

  isLogged(){
    return this.logged;
  }

  getUsername(){
    return this.userName;
  }

  getUsermail(){
    return this.userMail;
  }
}
