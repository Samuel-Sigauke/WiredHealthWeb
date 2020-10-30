import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRoomComponent } from './doctor-room.component';

describe('DoctorRoomComponent', () => {
  let component: DoctorRoomComponent;
  let fixture: ComponentFixture<DoctorRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
