import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ServiciosService } from '../services/servicios.service';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
public servicios = null;
   public constructor(private titleService: Title, private serviciosService: ServiciosService ) 
  {
  	this.setTitle('..:: Sitio Dinámico - Nuestros servicios ::..');
  }
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit()
  {
    this.servicios=this.serviciosService.serviciosList();
  }

}
