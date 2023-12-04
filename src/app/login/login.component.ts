import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  message:string="";
  constructor(private fb:FormBuilder,
    private AuthService:AuthService,
    private router:Router){}
  
    ngOnInit(): void {
        this.loginForm = this.fb.nonNullable.group({
          username:['', Validators.required],
          pwd:['', Validators.required]
        })
    }
  
    public get Username(){
      return this.loginForm.get('username');
    }
  
    public get Pwd(){
      return this.loginForm.get('pwd');
    }
    authentifier(){
      const {username, pwd}= this.loginForm.value; 
      this.AuthService.login(username, pwd).subscribe(
        users=> {
          if(users.length ==0){
            this.message = "Login ou mot de passe incorrect";
            localStorage.setItem('role', 'none');
          }  
            else {
              let role = users[0].role;
              if( role == 'Admin')
                this.router.navigate(["/activity"]);
              else
                this.router.navigate(["/events"]);
              localStorage.setItem('role', role);
              this.message="";
            }          
        }
      )    
    }
  
  }
  