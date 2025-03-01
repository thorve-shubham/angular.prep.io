import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInSignUpComponent } from './log-in-sign-up.component';

describe('LogInSignUpComponent', () => {
  let component: LogInSignUpComponent;
  let fixture: ComponentFixture<LogInSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
