import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  
  data: any
  dataExists = false
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.userService.getUserProduct(this.route.snapshot.paramMap.get('id')!).subscribe(
      res => {this.data = res.data},
      err => {},
      () => {this.dataExists = true}
    )
  }

  goWhatsapp(){
    window.open(this.data.whatsapp_url);
  }
}
