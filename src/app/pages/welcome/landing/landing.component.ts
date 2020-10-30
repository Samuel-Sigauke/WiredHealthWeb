import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onSchedule(): void { this.router.navigate(['/schedule']) }
  onView(): void { this.router.navigate(['/booking']) }
  onMsg(): void { this.router.navigate(['/messages']) }
  onDoc(): void { this.router.navigate(['/room']) }
  onCapture(): void { this.router.navigate(['/contact']) }

}
