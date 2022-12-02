import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { categories, ROUTEgridProducttID } from 'src/environments/environment';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent {

  Response: any
  Products : any
  
  value = ""
  selected = '';
  categories = categories
  
  //  Paginación
  pageNumber: number | undefined;
  currentPage = 0
  finalPage = 0
  disabledFirst = false
  disabledBack  = false
  disabledNext  = false
  disabledEnd   = false

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe( params => {
      
      this.pageNumber = params['page']
      
      let strPageParams = ""
      let strCategoryParams = ""
      
      if (params['page'] != undefined){ strPageParams = `page=${params['page']}` }
      if (params['category'] != undefined){ strCategoryParams = `category=${params['category']}` }
      
      let strAllParams = `${strPageParams}&${strCategoryParams}`

      productsService.getProducts(strAllParams).subscribe(
        resp => {
          this.Response = resp
          this.Products = resp.data
        },
        err => {},
        () => {
          this.currentPage = this.Response.page
          this.finalPage = this.Response.total_pages
          this.checkPaginator()
        }
      )
    } );

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

  goFirstPage(){ this.router.navigate([ROUTEgridProducttID], { queryParams: { page: 1, category: this.selected } }) }
  goBackPage(){ this.router.navigate([ROUTEgridProducttID], { queryParams: { page: this.currentPage - 1, category: this.selected } }) }
  goNextPage(){ this.router.navigate([ROUTEgridProducttID], { queryParams: { page: this.currentPage + 1, category: this.selected } }) }
  goEndPage(){ this.router.navigate([ROUTEgridProducttID], { queryParams: { page: this.finalPage, category: this.selected } }) }
  addCategoria(){this.router.navigate([ROUTEgridProducttID], { queryParams: { category: this.selected } }) }

  goViewProduct(idProduct: string){
    this.router.navigate([ROUTEgridProducttID, idProduct])
  }

}
