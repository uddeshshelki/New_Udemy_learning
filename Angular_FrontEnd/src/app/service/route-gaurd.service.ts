import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

//canActivate  nterface that a class can implement 
// to be a guard deciding if a route can be activated. If all guards return true, 
// navigation continues. If any guard returns false, navigation is cancelled.



export class RouteGaurdService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLogin())
    {
      return true
    }
      
    this.router.navigate(["/login"]);

    return false
  }
}

