import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  public login(login: string, pwd:string){
   
    return this.authenticated = (login == "admin" && pwd== "pwd") ;
}
  public logout(){
    this.authenticated = false;
  }
  public isAuthenticated() {
    return this.authenticated;
    }
  constructor() { }
}