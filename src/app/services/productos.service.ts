import { Injectable } from '@angular/core';
import {Productos} from '../interfaces/productos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMDMzOWY3MWNkZjM4ZTFmMTdhNTExYzE3MzQxMWM3ODhiYjkyZGFjNDExZTFlZDMxOTk1M2M0ZTZmZjNjMDQ1MDU3N2EzMTFhNzZiZjRkIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwMzM5ZjcxY2RmMzhlMWYxN2E1MTFjMTczNDExYzc4OGJiOTJkYWM0MTFlMWVkMzE5OTUzYzRlNmZmM2MwNDUwNTc3YTMxMWE3NmJmNGQiLCJpYXQiOjE1NTE3MDUzNDMsIm5iZiI6MTU1MTcwNTM0MywiZXhwIjoxNTgzMzI3NzQzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lL2f0CLiD99z8UKGMeSjwfZ0RxMhdb-N68j6--jVdKwWYqG8YXhfCPCrQdisqlmHUkJIV7Ag5Q8vVFW8QUYDPq-n8SxOqjUiYZb7BmUnr1MxI41-a8ulwT4gtnsv8dYNZkOcGX8GIjjANyz_4TDSBIMBxROhcfUY8WMOcV5TL_tsnSL8AgMysMKtF5ahgKYqBWTyn40_PlWnKOSnbE_mhqOXRz3QTdWfamcONmWzaOFJse36Tc5p2voqw1DqzncuZryVWDtnZNWpzQp5W1VD5Jp9ogTbC3IbndddAAibitZs_634akuH3G5EhWSW4IyZ3IHGZY4RZ9m_JDNXZvEzXtvDgNgq6BLRwBWekS8zhsYR2YBVumMOqm1stdoADeCn0Tt1tV9CCk2Y2WEc0_pB3a8AAGXOhOkYcLNlmCK5jjw1_S2KMw8h1s29b-Un7pBGqBEbNTn4KDWB7BXNoNITJBTmaflkIv8Hho7qwTOhKoXgL9jJHI6NbLlYJzL9fkAPRAzuiaANBarSl1yL5aU-C1MrBokAoK2hv9VH2pzbbk6m0UAZBoBLuPZ_DQTbmKQ27bA3hAvjdIpTYOnXIG7fNWvo8V9ztC-4fpvt6pcCBWwQ2oSa2pnFEtMRsc0eLwMrD5N_lOeHTTIriaG6lST67Wm_XcQQQhwDWFw_eHt3A_E'
  })
};
@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  

  constructor(private http: HttpClient) { }
  productosListHTTP() 
  {
    return this.http.get("http://192.168.1.59/tamila/cencosud/test/test_laravel/token/api/api", httpOptions);
    
  }  
  productosDetalleListHTTP(uid) 
  {
    let ruta="http://10.95.5.86/tamila/cencosud/test/test_laravel/token/api/api/"+uid;
    //console.log(ruta);
    return this.http.get(ruta, httpOptions);
    
  }  
}
