import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../activites/classes/user';

const URL ="http://localhost:3000/logins";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  public login(username: string, pwd:string){
    return this.http.get<User[]>(`${URL}?username=${username}&pwd=${pwd}`);
}
  public logout(){
    localStorage.removeItem('role');
  }
  public changePassword(oldPassword: string, newPassword: string) {
  const logins = JSON.parse(localStorage.getItem('logins') || '[]');
    const user = logins.find((u: any) => u.username === 'currentUsername');

    if (user && user.pwd === oldPassword) {
      user.pwd = newPassword;
      localStorage.setItem('logins', JSON.stringify(logins));
      return true; 
    } else {
      return false;
    }
  }}
