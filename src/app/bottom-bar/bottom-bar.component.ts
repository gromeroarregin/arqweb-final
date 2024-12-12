import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit{

  constructor(public loginService: UserloginService){}

  ngOnInit(): void {
  }

}
