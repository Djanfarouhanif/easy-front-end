import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-header-component',
  templateUrl: './landing-header-component.component.html',
  styleUrl: './landing-header-component.component.scss',
})
export class LandingHeaderComponentComponent implements AfterViewInit {
  
   constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Scroll smooth sur les liens d'ancre
    // const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    // links.forEach((link: HTMLAnchorElement) => {
    //   link.addEventListener('click', (e: Event) => {
    //     const href = link.getAttribute('href');
    //     if (href && href.startsWith('#')) {
    //       const target = document.getElementById(href.substring(1));
    //       if (target) {
    //         e.preventDefault();
    //         target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //       }
    //     }
    //   });
    // });
  }
}
