import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ProductosService } from '../services/productos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  public productos = null;
  public uid=null;
  constructor(private titleService: Title, private productosService: ProductosService, private route: ActivatedRoute) 
  {

  	this.setTitle('..:: Sitio Dinámico - Detalle Producto ::..');
  	let params: any = this.route.snapshot.params;
  	this.uid=params.uid;
  }
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
  	this.productosService.productosDetalleListHTTP(this.uid).subscribe( result =>  this.productos = result);
  }

}
