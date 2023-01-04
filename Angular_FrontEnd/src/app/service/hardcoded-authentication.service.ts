import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  

  autenticate(username: string, password: string) {
    
    console.log('before' ,this.isUserLogin());
   
    if (username === 'uddesh' && password === '1234') {
      sessionStorage.setItem('authenticateduser', username);
      console.log('after' ,this.isUserLogin());
      return true;
    }
    else
      return false;
  }

  isUserLogin() {
    let user = sessionStorage.getItem('authenticateduser')
    return !(user === null)
  }

  userLogout()
  {
    sessionStorage.removeItem('authenticateduser');
  }
}
