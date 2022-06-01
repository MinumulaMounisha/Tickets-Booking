import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  public show: boolean = false;
  public buttonName: any = 'Show';  
  public myForm: FormGroup;
  submitted = false;

  constructor( public loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.myForm = formBuilder.group({
        fullname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        acceptTerms: [false, Validators.requiredTrue],
      
     /*  {
        validators: [Validation.match('password', 'confirmPassword')]
      } */
   
      })
     }

  ngOnInit(): void {
  }

  get m(){
    return this.myForm.controls;
  }
   
  onSubmit(){
    console.log(this.myForm.value);
   /*  this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.myForm.value, null, 2)); */
  }

  onReset(): void {
    this.submitted = false;
    this.myForm.reset();
  }
  
  doLogin(){
    if(this.loginService.datiLogin().name){
      //alert("ciao");
      this.loginService.logout();
    }
    else{
      this.router.navigateByUrl("login");
    }
  }
  
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
       this.buttonName = "Hide";
    else
       this.buttonName = "Show";
 }
 
}
