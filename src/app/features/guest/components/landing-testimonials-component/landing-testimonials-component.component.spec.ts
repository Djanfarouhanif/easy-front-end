import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTestimonialsComponentComponent } from './landing-testimonials-component.component';

describe('LandingTestimonialsComponentComponent', () => {
  let component: LandingTestimonialsComponentComponent;
  let fixture: ComponentFixture<LandingTestimonialsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingTestimonialsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTestimonialsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
