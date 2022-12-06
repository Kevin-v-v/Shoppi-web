import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ROUTEfrontPage, ROUTEproductGrid, ROUTEuserAccount, ROUTEuserProducts } from 'src/environments/environment';
import { ROUTElogin } from '../../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private authService: AuthService, private router: Router) {
    authService.doAuth().subscribe(
      res => {},
      err => { this.router.navigate([ROUTElogin]) }
    );
  }

  goBack(){
    this.router.navigate([ROUTEproductGrid])
  }

  goProducts(){
    this.router.navigate([ROUTEuserProducts])
  }

  goAccount(){
    this.router.navigate([ROUTEuserAccount])
  }

  Logout(){
    this.authService.doLogOut().subscribe(
      res => {},
      err => {},
      () => { this.router.navigate([ROUTEfrontPage]) }
    );
  }
}
