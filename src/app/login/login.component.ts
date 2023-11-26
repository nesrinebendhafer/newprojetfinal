import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router, private authService: AuthService){}

  onLogin(logi:string, pwd: string){
    if (this.authService.login(logi,pwd)){this.router.navigate(['/activity']);return true ;}
    else{alert('tu doit saisir le données correctement!'); return false;}
  }
}