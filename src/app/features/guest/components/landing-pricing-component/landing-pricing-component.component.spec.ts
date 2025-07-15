import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPricingComponentComponent } from './landing-pricing-component.component';

describe('LandingPricingComponentComponent', () => {
  let component: LandingPricingComponentComponent;
  let fixture: ComponentFixture<LandingPricingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPricingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPricingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
