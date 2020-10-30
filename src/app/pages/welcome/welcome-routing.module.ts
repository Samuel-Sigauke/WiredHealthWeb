import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureContactComponent } from './capturecontact/capturecontact.component';
import { DoctorRoomComponent } from './doctor-room/doctor-room.component';
import { LogInComponent } from './log-in/log-in.component';
import { MessagingComponent } from './messaging/messaging.component';
import { PracticeComponent } from './practice/practice.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome.component';
import { LandingComponent } from './landing/landing.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: CaptureContactComponent },
  { path: 'room', component: DoctorRoomComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'messages', component: MessagingComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
