import { Injectable } from '@angular/core';
import {Galeria} from '../interfaces/galeria';
@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor() { }
   listar()
  {
let Galeria: Galeria[] =
  	[
  		{
  			uid: 1,
			url: 'http://www.cesarcancino.com/rest/angular/assets/images/slide_1.jpeg',
			descripcion: 'Espacial estudio trabajo'
  		},
  		{
  			uid: 2,
			url: 'http://www.cesarcancino.com/rest/angular/assets/images/slide_2.jpeg',
			descripcion: 'Herramientas eléctricas'
  		},
  		{
  			uid: 3,
			url: 'http://www.cesarcancino.com/rest/angular/assets/images/slide_3.jpeg',
			descripcion: 'Lámparas de escritorio'
  		},
  		{
  			uid: 4,
			url: 'http://www.cesarcancino.com/rest/angular/assets/images/slide_4.jpeg',
			descripcion: 'Terrazas hasta 60% de descuento'
  		},
  		
  	];
  	return Galeria;
  }
}
