import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrl: './menu-restrito.component.css'
})
export class MenuRestritoComponent {

  constructor( private _router: Router,private _loginService:LoginService){}

  logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }

}
