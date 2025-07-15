import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAboutComponentComponent } from './landing-about-component.component';

describe('LandingAboutComponentComponent', () => {
  let component: LandingAboutComponentComponent;
  let fixture: ComponentFixture<LandingAboutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAboutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingAboutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
