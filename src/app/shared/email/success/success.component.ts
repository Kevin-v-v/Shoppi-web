import { Component } from '@angular/core';
import { ROUTEproductGrid } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['../main/main.component.css']
})
export class SuccessComponent  {

  constructor(private router: Router) { }

  goProducts(){
    this.router.navigate([ROUTEproductGrid])
  }

}
