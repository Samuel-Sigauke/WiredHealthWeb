import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      number: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
  }
    
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  OnSubmit(): void {
    this.router.navigate(['/landing'])
  }


}
