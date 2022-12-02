import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { ROUTEproductGrid } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  hide = true;
  isDisabled = false

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, ) {}

  loginForm = this.formBuilder.group({
    email:[
      '', 
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}$/)
      ] 
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/)
       ]
    ]
  })

  noUserValid(){ return this.loginForm.controls.email.errors && this.loginForm.controls.email.touched }
  noPasswordValid(){ return this.loginForm.controls.password.errors && this.loginForm.controls.password.touched }

  saveForm(){
    if ( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched()
      return;
    }
    this.isDisabled = true
    this.authService.doLogin(this.loginForm.value).subscribe(
      res =>  { this.router.navigate([ROUTEproductGrid]) },
      err =>  { this.dialog.open(LoginDialog); this.isDisabled = false}
    );
  }

}

@Component({
  selector: 'login-dialog',
  templateUrl: '../components/login/loginDialog.html',
})
export class LoginDialog {}