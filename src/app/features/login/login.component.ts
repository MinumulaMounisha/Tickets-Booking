import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from 'src/app/core/login.model';
import { LoginService } from 'src/app/shared/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 login: Partial<Login>={}

  constructor(
    private httpClient: HttpClient,
    public loginService : LoginService,
    private router: Router

  ) { 
  }

  
  logga(f:NgForm){

    const url = environment.baseURL + '/login';
    this.httpClient.get<Login>(url).subscribe(data => {
      //this.login = data;
      this.loginService.settaLogin(data);

      this.router.navigateByUrl('search');
      console.log(this.login);
    },errore =>{
      // sei il login non funziona
      console.log(errore);
    });

    /* this.httpClient.get<Login>(url).subscribe({
      next: (data) => {
        this.login = data;
      },
      error: () => {

      }
    })  */
  }
}

