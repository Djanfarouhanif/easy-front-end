import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var gsap: any;
declare var SplitText: any;
declare var TextPlugin: any;

@Component({
  selector: 'app-landing-hero-component',
  templateUrl: './landing-hero-component.component.html',
  styleUrls: ['./landing-hero-component.component.scss'],
})
export class LandingHeroComponentComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // S'assurer que GSAP et les plugins sont chargés
    if (typeof gsap !== 'undefined' && typeof TextPlugin !== 'undefined') {
      gsap.registerPlugin(TextPlugin);
      // Animation typewriter sur l'ensemble du titre, puis EasyClause
      gsap.to(this.el.nativeElement.querySelector('.typewriter'), {
        text: "Bienvenue sur ",
        duration: 2,
        ease: 'power1.in',
        onComplete: () => {
          gsap.to(this.el.nativeElement.querySelector('.typewriter'), {
            text: "EasyClause",
            duration: 2,
            ease: 'power1.in'
          });
        }
      });

      // SplitText sur le paragraphe
      if (typeof SplitText !== 'undefined') {
        const split = new SplitText(this.el.nativeElement.querySelector('.split-text'), { type: 'chars' });
        gsap.from(split.chars, {
          opacity: 0,
          y: 20,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    }
  }
}
