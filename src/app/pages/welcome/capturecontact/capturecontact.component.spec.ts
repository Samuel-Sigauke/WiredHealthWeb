import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturecontactComponent } from './capturecontact.component';

describe('CapturecontactComponent', () => {
  let component: CapturecontactComponent;
  let fixture: ComponentFixture<CapturecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
