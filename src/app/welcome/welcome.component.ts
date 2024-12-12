import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  constructor(public loginService: UserloginService){}

  ngOnInit(): void {
  }

}
