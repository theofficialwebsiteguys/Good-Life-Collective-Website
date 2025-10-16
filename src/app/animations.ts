import { trigger, style, transition, animate, keyframes, state } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('false', style({ opacity: 0, transform: 'translateY(40px)' })),
  state('true', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('false => true', [
    animate('1s cubic-bezier(0.25, 1, 0.5, 1)')
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms ease-out', style({ opacity: 1 }))
  ])
]);
