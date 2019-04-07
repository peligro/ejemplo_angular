import { Component, OnInit, DoCheck } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
   public id;
   public name;
   public token;
   constructor( public _userService : UserService ) 
  {
  	this.loadUser();
  }
  ngOnInit()
  {
    
  }
  ngDoCheck()
  {
    this.loadUser();
  }
  loadUser()
  {
    if(this._userService.getId()==null || this._userService.getId()=='0')
    {
      this.id='0';
      this.name='vacio';
      
    }else
    {
      this.id=this._userService.getId().replace(/^"(.+)"$/,'$1');
      this.name=this._userService.getName().replace(/^"(.+)"$/,'$1');
    }
    this.token=this._userService.getToken();
  }
 
}
