import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public titulo: string;
  public user:User;
  public status : string;
  public token : string;			
  constructor
  	(
  		private _userService: UserService,
  		private _router: Router,
  		private _activatedRoute: ActivatedRoute
  	)
   {
		this.titulo="Ingrese sus datos";
		this.user=new User(1, '', '', '', 1);
   }

  ngOnInit() {
  	this.logout();
  }
  onSubmit(form)
  {
  	this._userService.login(this.user.email, this.user.password).subscribe
  	(
  		response=>
  		{
			if(response.status!='error')
			{
				this.status='success';
				this.token=response.token;
				this._userService.datosUsuario(response.token).subscribe
				(
					response=>
					{
					
						localStorage.setItem('token', this.token);
						localStorage.setItem('id', response.id);
						localStorage.setItem('name', response.name);
						this._router.navigate(['/']);
					},error=>
					{
						this.status='error';
  						console.log(<any>error);
  						localStorage.setItem('id', '0');
						localStorage.setItem('name', 'vacio');
					}
				);
				
			}else
			{
				this.status='error';
			}
  			
  		},error=>
  		{
  			this.status='error';
  			console.log(<any>error);
  		}
  	);
  }
  logout()
  {
  	this._activatedRoute.params.subscribe
  	(
  		params=>
  		{
  			let logout = params['sure'];
  			if(logout==1)
  			{
  				localStorage.removeItem('token');
  				localStorage.removeItem('id');
  				localStorage.removeItem('name');
  				this.token=null;
  				this._router.navigate(['/login']);
  			}
  		}
  	);
  }
}
