import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  }); 
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      // שימוש בסרוויס לבדיקת המשתמש
      const role = this.authService.checkUser(username!, password!);

      if (role === 'teacher') {
        this.router.navigate(['/lessons']);
      } else if (role === 'secretary') {
        this.router.navigate(['/lessons']);
      } else {
        this.errorMessage = 'שם משתמש או סיסמה שגויים';
      }
    }
  }


}


