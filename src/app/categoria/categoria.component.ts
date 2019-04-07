import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {

  public titulo: string;
  public categorias: Array<Categoria>;
  constructor(private _categoriaService: CategoriaService) 
  {
  	this.titulo="Categorías";
  }

  ngOnInit() {
  	this.getListado();
  }
  getListado()
  {
  	this._categoriaService.listar().subscribe
  	(
  		response=>
  		{
  			this.categorias =response;
  		},
  		error=>
  		{
  			console.log("error en la carga");
  		}
  	);
  }
}
