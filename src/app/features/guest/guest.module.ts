import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing';
import { HomeComponent } from './pages/home/home.component';
import { LandingAboutComponentComponent } from './components/landing-about-component/landing-about-component.component';
import { LandingContactComponentComponent } from './components/landing-contact-component/landing-contact-component.component';
import { LandingFaqComponentComponent } from './components/landing-faq-component/landing-faq-component.component';
import { LandingFeaturesComponentComponent } from './components/landing-features-component/landing-features-component.component';
import { LandingFooterComponentComponent } from './components/landing-footer-component/landing-footer-component.component';
import { LandingHeaderComponentComponent } from './components/landing-header-component/landing-header-component.component';
import { LandingHeroComponentComponent } from './components/landing-hero-component/landing-hero-component.component';
import { LandingPricingComponentComponent } from './components/landing-pricing-component/landing-pricing-component.component';
import { LandingTestimonialsComponentComponent } from './components/landing-testimonials-component/landing-testimonials-component.component';
import { SuccessPayementComponent } from './components/success-payement-component/success-payement.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingAboutComponentComponent,
    LandingContactComponentComponent,
    LandingFaqComponentComponent,
    LandingFeaturesComponentComponent,
    LandingFooterComponentComponent,
    LandingHeaderComponentComponent,
    LandingHeroComponentComponent,
    LandingPricingComponentComponent,
    LandingTestimonialsComponentComponent,
    SuccessPayementComponent
  ],
  imports: [CommonModule, GuestRoutingModule],
  exports: [
     LandingContactComponentComponent,
    LandingFaqComponentComponent,
    LandingFeaturesComponentComponent,
    LandingFooterComponentComponent,
    LandingHeaderComponentComponent,
    LandingHeroComponentComponent,
    LandingPricingComponentComponent,
    LandingTestimonialsComponentComponent,
  ]
})
export class GuestModule {}
