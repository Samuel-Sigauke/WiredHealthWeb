import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzListModule } from 'ng-zorro-antd/list';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { CaptureContactComponent } from './capturecontact/capturecontact.component';
import { DoctorRoomComponent } from './doctor-room/doctor-room.component';
import { PracticeComponent } from './practice/practice.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LandingComponent } from './landing/landing.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, 
    NzFormModule, FormsModule, ReactiveFormsModule,
    NzInputModule, NgZorroAntdModule, NzCalendarModule,
    CommonModule,BrowserModule,NzListModule],
  declarations: [WelcomeComponent, LogInComponent, SignupComponent, 
    CaptureContactComponent, DoctorRoomComponent, PracticeComponent, 
    MessagingComponent, ScheduleComponent,  LandingComponent, 
    BookingComponent],
  exports: [WelcomeComponent, NgZorroAntdModule]
})
export class WelcomeModule { }
