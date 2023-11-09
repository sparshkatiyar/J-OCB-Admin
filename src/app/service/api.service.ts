import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl

  post(url:any,data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/v1/admin/${url}`,data)
  }

  get(url:any):Observable<any>{
     return this.http.get(`${this.baseUrl}/v1/admin/${url}`)
   }
  }
