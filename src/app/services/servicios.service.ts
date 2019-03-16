import { Injectable } from '@angular/core';
import {Servicios} from '../interfaces/servicios';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }
   serviciosList()
  {
	let Servicios: Servicios[] =
	  	[
	  		{
	  			uid: 1,
				nombre: 'Planchado de ropa',
				descripcion: 'Planchamos toda su ropa a domicilio y la dejamos súper arrugada'
	  		},
	  		{
	  			uid: 2,
				nombre: 'Se cuidan niños',
				descripcion: 'no los malcriamos pero si los hacemos engordar'
	  		},
	  		{
	  			uid: 3,
				nombre: 'Preparación física',
				descripcion: 'Te ayudamos a bajar esos kilos de más.'
	  		},
	  		{
	  			uid: 4,
				nombre: 'Confección de juguetes',
				descripcion: 'Creamos los juguetes que tu imaginación te vende'
	  		},
	  		{
	  			uid: 5,
				nombre: 'Cocinamos horrible',
				descripcion: 'No comas con nosotros porque si lo haces te vas a deprimir'
	  		},
	  		{
	  			uid: 6,
				nombre: 'Limpiamos tu departamento',
				descripcion: 'Somos súper flojos con ñandú'
	  		},
	  	];
	  	return Servicios;
  }
}
