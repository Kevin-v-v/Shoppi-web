import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hostCloud } from '../../environments/environment';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //data.forEach((key,value)=>{console.log(key, value)})
  constructor(private http: HttpClient) {}
  
  doRegister(data: FormData, image: any){
    data.append("image", image)
    return this.http.post(`${hostCloud}register`, data)
  }

  doLogin(loginForm: any){
    return this.http.post<LoginResponse>(`${hostCloud}login`, loginForm, {observe: "response", withCredentials: true})
  }

  doAuth(){
    return this.http.get<LoginResponse>(`${hostCloud}auth`, {observe: "response", withCredentials: true})
  }

  doLogOut(){
    return this.http.delete(`${hostCloud}logout`, {observe: "response", withCredentials: true})
  }

  sendEmail(username: string){
    return this.http.get(`${hostCloud}sendmail?username=${username}`, {observe: "response", withCredentials: true})
  }
}
