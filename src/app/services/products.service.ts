import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { hostCloud } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(params: string | undefined) {
    if (params == undefined || params == ""){
      return this.http.get<ProductResponse>(`${hostCloud}posts/get`)
    }else {
      return this.http.get<ProductResponse>(`${hostCloud}posts/get?${params}`)
    }
  }
}
