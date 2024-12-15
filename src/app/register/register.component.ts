import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form with the required fields
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nationality: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      registerData.licenseExpirationDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
      registerData.joinDate = new Date().toISOString();

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http
        .post('http://localhost:443/api/auth/register', registerData, { headers })
        .subscribe({
          next: (response) => {
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.error('Registration failed:', error);
          },
        });
    } else {
      console.error('Invalid form submission');
    }
  }
}
