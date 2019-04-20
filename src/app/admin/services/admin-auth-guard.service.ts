import { UserService } from '../../shared/services/user.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private userService: UserService) { }

  CanActivate(){ //: Observable<boolean> {
    //return this.auth.user$
    // .switchMap(user => this.userService.get())//(user.uid))
    // .map(appUser => appUser.isAdmin);
  }

}
