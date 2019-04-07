import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
 public url:string;
  constructor
	(
		public _http:HttpClient
	)
	{
		this.url=global.url;
	}
	listar(): Observable<any>
	{
		let headers = new HttpHeaders({
		    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.W3siaWQiOjksImVtYWlsIjoidGFtaWxhQHRhbWlsYS5jbCIsIm5hbWUiOiJDYW1pbGEgRnVlbnRlcyBDb3J0XHUwMGU5cyIsImlhdCI6MTU1NDU2NDA0MCwiZXhwIjoxNTU0NTY3NjQwfV0.yzk1HUtqlK10DkUk6mNsM5vPviU-Kt6BvUZH22QQRyU',
		});
		return this._http.get(this.url+"api/v1/categoria", {headers:headers});
	}
}
