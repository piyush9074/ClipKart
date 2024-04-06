import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../core/Models/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent {
  regForm:boolean = false;
  signUpForm!:FormGroup;
  signInForm!:FormGroup;
  singUpSubmitted=false;
  href:string="";
  user_data:any;
  user_details!:User;
  user_reg_data:any;
  signInFormValue:any={};

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginSignupService){

  }

  ngOnInit():void{
    this.href=this.router.url;
    if(this.href=='/sign-up'){
      this.regForm=true;
    }else if (this.href=='sign-in'){
      this.regForm=false;
    }
    
  }
}
