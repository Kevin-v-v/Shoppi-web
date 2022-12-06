import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEproductGrid } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['../main/main.component.css']
})
export class VerifiedComponent {

  constructor(private router: Router) { }

  goProducts(){
    this.router.navigate([ROUTEproductGrid])
  }

}
