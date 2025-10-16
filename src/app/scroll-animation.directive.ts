import { Directive, ElementRef, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnDestroy {
  private observer: IntersectionObserver;

  @HostBinding('@fadeInUp') fadeInUp = false; // 👈 match the trigger name

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.fadeInUp = true;
        this.observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
