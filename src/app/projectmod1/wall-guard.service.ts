import { FirstService } from './../servicecomp/first.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WallGuardService implements CanActivate {

  constructor(private service : FirstService) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.service.checkUser(route.params['userName']);
  }
}
