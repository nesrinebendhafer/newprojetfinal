
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  message: string = "";
  constructor( private router: Router,private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }
  changePassword() {
    const { oldPassword, newPassword } = this.changePasswordForm.value;
    const success=this.authService.changePassword(oldPassword, newPassword)
    console.log("Old Password:", oldPassword, "New Password:", newPassword);
    if (success) {
      this.message = "Mot de passe changé avec succès";
    } else {
      this.message = "Mot de passe actuel incorrect";
    }
    this.changePasswordForm.reset();
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  
}
