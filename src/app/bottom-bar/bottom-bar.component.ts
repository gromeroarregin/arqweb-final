import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit{

  constructor(public _auth: AuthService, public loginService: UserloginService){}

  ngOnInit(): void {
  }

}
