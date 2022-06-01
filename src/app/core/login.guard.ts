import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../shared/login.service";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    [x: string]: any;
    canActivate() {
        // return true;
        if (this.loginService.datiLogin().name) {
            return true
        }
        else {

            this.router.navigateByUrl("login");
            return false;
        }
    }
    constructor(
        public loginService: LoginService,
        private router: Router
    ) { }

}