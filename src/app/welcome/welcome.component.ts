import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  constructor(public _auth: AuthService, public loginService: UserloginService, public title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Gestión de Turnos');
  }

  getName(): string{
    if (this._auth.isAuthenticated$){
      let name: any;
      this._auth.user$.subscribe(value => name=value?.name);
      return name;
    }
    else
    if (this.loginService.isLogged()){
      let name = this.loginService.getUsername();
      return name;
    }
    else
    return "";
  }

}
