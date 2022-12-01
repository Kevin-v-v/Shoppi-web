import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from 'src/environments/environment';
import { CreateProductResponse } from '../interfaces/create-product-response';
import { GetProducts } from 'src/app/interfaces/get-products';
import { ProductID } from '../interfaces/productId';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createProduct(data: FormData, image: any){
    data.append("image", image)
    //data.forEach((key,value)=>{console.log(key, value)})
    return this.http.post<CreateProductResponse>(`${host}posts/create`, data, {observe: "response", withCredentials: true})
  }

  getUserProducts(number: number){
    return this.http.get<GetProducts>(`${host}posts/getown?page=${number}`, {observe: "response", withCredentials: true})
  }

  getUserProduct(id: string){
    return this.http.get<ProductID>(`${host}posts/get/${id}`)
  }

  modifyUserProduct(data: FormData, image: any){
    data.append("image", image)
    return this.http.put(`${host}posts/update`, data, {observe: "response", withCredentials: true})
  }

  deleteUserProduct(postId: string){
    return this.http.delete(`${host}posts/delete`, {body: {"post_id": postId}, observe: "response", withCredentials: true})
  }
}
