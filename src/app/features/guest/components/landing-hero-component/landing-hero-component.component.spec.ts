import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeroComponentComponent } from './landing-hero-component.component';

describe('LandingHeroComponentComponent', () => {
  let component: LandingHeroComponentComponent;
  let fixture: ComponentFixture<LandingHeroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHeroComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
