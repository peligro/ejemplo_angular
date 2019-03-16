import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GaleriaService } from '../services/galeria.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public galerias = null;
  constructor(private titleService: Title, private galeriaService: GaleriaService) 
  {
  	this.setTitle('..:: Sitio Dinámico - Inicio ::..');
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  ngOnInit()
  {
  	this.galerias=this.galeriaService.listar();
  }

}
