import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-room',
  templateUrl: './doctor-room.component.html',
  styleUrls: ['./doctor-room.component.css']
})
export class DoctorRoomComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      roomNumber: [null, [Validators.required]],
      doctorType: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobileNumber: [null, [Validators.required]]
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
