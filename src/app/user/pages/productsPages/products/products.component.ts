import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTEuserCreateProduct, ROUTEuserProducts, ROUTEuserViewProduct, ROUTEuserModifyProduct, ROUTEuser } from '../../../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsResponse: any
  productsData: any

  //  Paginación
  pageNumber: number | undefined;
  currentPage = 0
  finalPage = 0
  disabledFirst = false
  disabledBack  = false
  disabledNext  = false
  disabledEnd   = false

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe( params => {
      
      let strPageParams = ""
      if (params['page'] != undefined){ strPageParams = `page=${params['page']}` }
      userService.getUserProducts(strPageParams).subscribe(
        res => { this.productsResponse = res.body },
        err => {},
        () => {
          this.productsData = this.productsResponse.data
          this.currentPage = this.productsResponse.page
          this.finalPage = this.productsResponse.total_pages
          this.checkPaginator()
        }
      )
    } );
  }

  createProduct(){
    this.router.navigate([ROUTEuserCreateProduct])
  }

  viewProduct(productID: string){
    this.router.navigate([ROUTEuserViewProduct, productID])
  }

  modifyProduct(productID: string){
    this.router.navigate([ROUTEuserModifyProduct, productID])
  }

  deleteProduct(productID: string){
    this.userService.deleteUserProduct(productID).subscribe(
      res => { this.router.navigate([ROUTEuser]) },
      err => { this.router.navigate([ROUTEuser]) }
    );
  }

  checkPaginator() {
    if (this.currentPage <= 1){
      this.disabledFirst = true;
      this.disabledBack = true;
    }else{
      this.disabledFirst = false;
      this.disabledBack = false;
    }
    if (this.currentPage == this.finalPage){
        this.disabledNext = true;
        this.disabledEnd = true;
    }else{
      this.disabledNext = false;
      this.disabledEnd = false;
    }
  }

  goFirstPage(){ this.router.navigate([ROUTEuserProducts], { queryParams: { page: 1 } }) }
  goBackPage(){ this.router.navigate([ROUTEuserProducts], { queryParams: { page: this.currentPage - 1 } }) }
  goNextPage(){ this.router.navigate([ROUTEuserProducts], { queryParams: { page: this.currentPage + 1 } }) }
  goEndPage(){ this.router.navigate([ROUTEuserProducts], { queryParams: { page: this.finalPage } }) }
  
}