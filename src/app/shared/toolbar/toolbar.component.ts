import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ROUTEfrontPage, ROUTElogin, ROUTEregister, ROUTEuserProducts } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent{
  auth = false
  data: any

  constructor(private authService: AuthService, private router: Router) {
    this.authService.doAuth().subscribe(
      res => {
        this.data = res.body?.user_data; 
        this.auth = true
      },
      err => {this.auth = false}
    );
  }

  goRegister(){
    this.router.navigate([ROUTEregister])
  }

  goLogin(){
    this.router.navigate([ROUTElogin])
  }

  goUser(){
    this.router.navigate([ROUTEuserProducts]);
  }

  goFrontPage(){
    this.router.navigate([ROUTEfrontPage])
  }

}
