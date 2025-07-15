import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHeaderComponentComponent } from './landing-header-component.component';

describe('LandingHeaderComponentComponent', () => {
  let component: LandingHeaderComponentComponent;
  let fixture: ComponentFixture<LandingHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHeaderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
