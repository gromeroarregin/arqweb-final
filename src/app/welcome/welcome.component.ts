import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  constructor(public loginService: UserloginService, public title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Gestión de Turnos');
  }

}
