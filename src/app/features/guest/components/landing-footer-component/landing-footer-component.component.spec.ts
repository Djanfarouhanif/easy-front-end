import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFooterComponentComponent } from './landing-footer-component.component';

describe('LandingFooterComponentComponent', () => {
  let component: LandingFooterComponentComponent;
  let fixture: ComponentFixture<LandingFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFooterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
