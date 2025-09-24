import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    { q: 'What are your store hours?', a: 'We’re open daily with convenient hours for the community. Check our posted schedule below.', open: false },
    { q: 'Do you offer online ordering?', a: 'Yes, customers can browse and order online for in-store pickup.', open: false },
    { q: 'Is Good Life Collective family owned?', a: 'Yes, our business is owned and operated by the Hernandez family.', open: false },
    { q: 'Where are you located?', a: 'We’re located in Rochester, NY, with a second store in Astoria, Oregon.', open: false },
    { q: 'How can I contact you?', a: 'You can call us, visit our store, or use the contact info provided below.', open: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
