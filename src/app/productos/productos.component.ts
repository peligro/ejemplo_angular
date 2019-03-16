import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 public productos = null;
 public constructor(private titleService: Title, private productosService: ProductosService ) 
  {
  	this.setTitle('..:: Sitio Dinámico - Nuestros productos ::..');
  }
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    //this.productosService.productosList().subscribe( result =>  this.productos = result);
    this.productosService.productosListHTTP().subscribe( result =>  this.productos = result);
    //this.productos=this.productosService.productosListHTTP();
  }

}
