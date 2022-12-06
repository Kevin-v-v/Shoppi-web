import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEproductGrid } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['../main/main.component.css']
})
export class ErrorComponent {

  constructor(private router: Router) { }

  goProducts(){
    this.router.navigate([ROUTEproductGrid])
  }

}
