import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMsg = 'Invalid Credentials'
  errorFlag = false

  //Dependency Injection
  constructor(private router: Router,
    private hardcodedauthenticationservice: HardcodedAuthenticationService) {

  }
  ngOnInit() {

  }



  simplyLogin() {
    if (this.hardcodedauthenticationservice.autenticate(this.username, this.password)) {
      this.router.navigate(['welcome'])
      this.errorFlag = false
    }
  else
  {
    this.errorFlag = true
  }

  
    
}
  }

