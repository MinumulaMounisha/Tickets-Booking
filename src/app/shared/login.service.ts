import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../core/login.model";

@Injectable({ providedIn: 'root' })
export class LoginService {

    private login: Partial<Login> = {};

    constructor(
        private router: Router
    ) { }
    
    settaLogin(login: Login) {

        this.login.name = login.name;
        this.login.token = login.token;
        localStorage.setItem("token", JSON.stringify(this.login) /* this.login.token */);
    }

    tokenPresent() {
        if (localStorage.getItem("token") != null) {
            this.login = JSON.parse(localStorage.getItem("token") || "")
            return true
        }
        else
            return false
    }


    datiLogin() {
        return this.login;
    }

    logout() {
        localStorage.removeItem("token");
        this.login = {};
        this.router.navigateByUrl('login');
    }
}
