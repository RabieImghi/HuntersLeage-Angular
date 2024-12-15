import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const body = {
        username: username,
        password: password,
      };
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .post('http://localhost:443/api/auth/login', body, { headers })
        .subscribe({
          next: (response: any) => {
            localStorage.setItem('token', response.jwt);
            this.router.navigate(['']);
          },
          error: (error) => {
            console.error('Login failed:', error);
          },
        });
    } else {
      console.error('Invalid form submission');
    }
  }
  
}
