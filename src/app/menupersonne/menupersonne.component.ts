import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
@Component({
  selector: 'app-menupersonne',
  templateUrl: './menupersonne.component.html',
  styleUrls: ['./menupersonne.component.css']
})
export class MenupersonneComponent {
  constructor(private router:Router,
    private loginService:AuthService){}

  onDisconnect(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
