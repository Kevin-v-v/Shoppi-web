import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostCloud } from 'src/environments/environment';
import { CreateProductResponse } from '../interfaces/create-product-response';
import { GetProducts } from 'src/app/interfaces/get-products';
import { ProductID } from '../interfaces/productId';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //data.forEach((key,value)=>{console.log(key, value)})
  constructor(private http: HttpClient) { }

  createProduct(data: FormData, image: any){
    data.append("image", image)
    return this.http.post<CreateProductResponse>(`${hostCloud}posts/create`, data, {observe: "response", withCredentials: true})
  }

  getUserProducts(param: any){
    if (param == ""){
      return this.http.get<GetProducts>(`${hostCloud}posts/getown`, {observe: "response", withCredentials: true})
    }else {
      return this.http.get<GetProducts>(`${hostCloud}posts/getown?${param}`, {observe: "response", withCredentials: true})
    }
  }

  getUserProduct(id: string){
    return this.http.get<ProductID>(`${hostCloud}posts/get/${id}`)
  }

  modifyUserProduct(data: FormData, image: any){
    data.append("image", image)
    return this.http.put(`${hostCloud}posts/update`, data, {observe: "response", withCredentials: true})
  }

  deleteUserProduct(postId: string){
    return this.http.delete(`${hostCloud}posts/delete`, {body: {"post_id": postId}, observe: "response", withCredentials: true})
  }

  toggleUserProduct(postId: string){
    return this.http.delete(`${hostCloud}posts/toggle`, {body: {"post_id": postId}, withCredentials: true})
  }
}
