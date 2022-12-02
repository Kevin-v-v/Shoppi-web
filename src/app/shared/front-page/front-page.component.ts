import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTEproductGrid } from '../../../environments/environment';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  constructor(private router: Router) { }

  goProducts(){
    this.router.navigate([ROUTEproductGrid])
  }

}
