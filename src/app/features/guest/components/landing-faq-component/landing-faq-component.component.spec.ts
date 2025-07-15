import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFaqComponentComponent } from './landing-faq-component.component';

describe('LandingFaqComponentComponent', () => {
  let component: LandingFaqComponentComponent;
  let fixture: ComponentFixture<LandingFaqComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFaqComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFaqComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
