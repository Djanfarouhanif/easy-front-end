import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeaturesComponentComponent } from './landing-features-component.component';

describe('LandingFeaturesComponentComponent', () => {
  let component: LandingFeaturesComponentComponent;
  let fixture: ComponentFixture<LandingFeaturesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFeaturesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFeaturesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
