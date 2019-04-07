import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';

import { FooterComponent } from './footer/footer.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductosService } from './services/productos.service';
import { ServiciosService } from './services/servicios.service';
import { GaleriaService } from './services/galeria.service';
import { GaleriaActivePipe } from './pipes/galeria-active.pipe';
import { CategoriaComponent } from './categoria/categoria.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
const rutas: Routes=
[
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:uid', component: ProductoDetalleComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria/:uid', component: CategoriaComponent},
  {path: 'post', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'mi-perfil', component: MiPerfilComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ServiciosComponent,
    ContactoComponent,
    NosotrosComponent,
    MenuComponent,
    FooterComponent,
    ProductoDetalleComponent,
    ErrorComponent,
    GaleriaActivePipe,
    CategoriaComponent,
    PostComponent,
    LoginComponent,
    MiPerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [Title, ProductosService, ServiciosService, GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
