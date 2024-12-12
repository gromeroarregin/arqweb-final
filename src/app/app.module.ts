import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { UserloginService } from './userlogin.service';
import { AuthModule } from '@auth0/auth0-angular';
import { UserloginComponent } from './userlogin/userlogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnosService } from './turnos.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},                  //Pantalla principal
      {path: 'login', component: UserloginComponent},           //Pantalla de login simulado
      {path: 'profile', component: ProfileComponent},           //Pantalla de datos del perfil
      {path: 'contact', component: ContactComponent},           //Pantalla de datos de contacto
      {path: 'turnos', component: TurnosComponent},             //Pantalla de turnos
    ]),

    //Declaracion del modulo de Auth0
    AuthModule.forRoot({
      domain:'dev-cghnzvcnwav4dpvu.us.auth0.com',
      clientId:'4rrlEvklYHpZ0IkIoN4mrIcsWhhhvEQS',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    })
  ],
  providers: [
    //Crear una instancia del servicio de login simulado para inyectarla en el componente de login
    UserloginService,
    TurnosService,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    UserloginComponent,
    WelcomeComponent,
    ProfileComponent,
    ContactComponent,
    TurnosComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/