import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  data:  any
  login = ["auth/login"]
  dataExists = false
  userStatus = false
  
  constructor(private authService: AuthService, private router: Router) {
    authService.doAuth().subscribe(
      res => { this.data = res.body?.user_data },
      err => { this.router.navigate(this.login) },
      () => { 
        this.dataExists = true;
        if (this.data.user_status == 1){ this.userStatus = true}
      }
    );
  }
  
  sendEmail(){
    this.authService.sendEmail(this.data.username).subscribe(
      res => { console.log(res) },
      err => { console.log(err) },
      () => { }
    )
  }

}