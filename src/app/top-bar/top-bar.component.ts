import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})



export class TopBarComponent implements OnInit{

  username: any;

  constructor(public _auth: AuthService, public loginService: UserloginService){}    //Inyeccion de servicios de Auth0 y login simulado

  ngOnInit(): void {
    this.getUsername();
  }

  async getUsername(){
    this._auth.user$.subscribe(value => this.username=value?.name)
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/