import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContactComponentComponent } from './landing-contact-component.component';

describe('LandingContactComponentComponent', () => {
  let component: LandingContactComponentComponent;
  let fixture: ComponentFixture<LandingContactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingContactComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
