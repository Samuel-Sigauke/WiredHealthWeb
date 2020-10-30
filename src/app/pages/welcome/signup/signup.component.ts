import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
    
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  Signup(): void {
    this.router.navigate(['/practice'])
  }

  login(): void {
    this.router.navigate(['/login'])
  }

}
