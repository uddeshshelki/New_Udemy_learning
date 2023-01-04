import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // message: string = 'hello uddesh'
  // messag: string = 'hello aadil'
  // isUserLogin = false




  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService) { }


  ngOnInit() {
    // this.isUserLogin = this.hardcodedAuthenticationService.isUserLogin();
  }
}
