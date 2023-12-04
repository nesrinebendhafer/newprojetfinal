import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent {
  constructor(private router:Router,
    private loginService:AuthService){}

  onDisconnect(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
