import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {global} from './global';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;
  public id;
  public name;
  public token;
	constructor
	(
		public _http:HttpClient
	)
	{
		this.url=global.url;
	}
	login(email, password): Observable<any>
	{
		let params='email='+email+'&password='+password;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.post(this.url+"api/v1/login", params, {headers:headers}); 
	}
	datosUsuario(token): Observable<any>
	{
		let params='';
		let headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
		return this._http.post(this.url+"api/v1/token", params, {headers:headers}); 
	}
	getId()
	{
		let id=JSON.stringify(localStorage.getItem('id'));
		if(localStorage.getItem('id') && localStorage.getItem('id') != null)
		{
			this.id=id;
		}else
		{
			this.id='0';
		}

		return this.id;
	}
	getName()
	{
		let name=JSON.stringify(localStorage.getItem('name'));
		if(name && name != 'undefined')
		{
			this.name=name;
		}else
		{
			this.name='vacio';
		}
		return this.name;
	}
	getToken()
	{
		let token=JSON.stringify(localStorage.getItem('token'));
		if(token && token != 'undefined')
		{
			this.token=token;
		}else
		{
			this.token=null;
		}
		return this.token;
	}
}
