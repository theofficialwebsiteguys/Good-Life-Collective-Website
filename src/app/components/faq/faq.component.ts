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
    {
      question: 'What is a CAURD licensee?',
      answer: 'CAURD (Conditional Adult Use Retail Dispensary) licensees are the first retail dispensaries to open for legal adult-use cannabis sales in New York State, establishing businesses owned by justice-involved individuals at the bedrock of New York\'s adult-use cannabis market.',
      open: false
    },
    {
      question: 'Who is eligible to purchase from Good Life Collective?',
      answer: 'Individuals who are at least 21 years old and possess a valid government-issued photo ID can purchase cannabis products from our dispensary.',
      open: false
    },
    {
      question: 'What types of products does Good Life Collective offer?',
      answer: 'We offer a diverse range of cannabis products, including flower, edibles, concentrates, tinctures, topicals, and more. Our selection is curated to cater to various preferences and needs of our customers. Check out our shop.',
      open: false
    },
    {
      question: 'How can I pay for my purchase?',
      answer: 'Customers can pay with cash, debit, or Aeropay ACH. We have ATMs on-site.',
      open: false
    },
    {
      question: 'Who are Budtenders?',
      answer: 'Budtenders play a vital role in the functioning of the Good Life Collective community by providing personalized assistance and guidance to customers, promoting responsible cannabis consumption, and ensuring compliance with regulations. Whether going for a walk in Central Park, a show in Lincoln Center, or a 5-star meal on Columbus Avenue, our Budtenders have the right product for you.',
      open: false
    },
    {
      question: 'Can I consume cannabis products on-site?',
      answer: 'No, consumption of cannabis products is not permitted on or directly outside our premises.',
      open: false
    },
    {
      question: 'Why buy from a legal and licensed dispensary?',
      answer: 'Purchasing cannabis from a legal and licensed dispensary ensures quality, safety, and accountability. Our products undergo rigorous testing to meet regulatory standards, and we adhere to strict protocols for cultivation, processing, and distribution. Additionally, buying from a licensed dispensary supports the legal cannabis industry, promotes transparency, and helps fund essential programs and initiatives in our community.',
      open: false
    },
    {
      question: 'How do I sell my cannabis brand at Good Life Collective?',
      answer: 'We\'re thrilled that you\'re interested in partnering with us. Let\'s bring legal cannabis to the masses. Reach out to flowerpowerdispensersmarketing@gmail.com to get started!',
      open: false
    },
    {
      question: 'How do I get to Good Life Collective Dispensers?',
      answer: 'Good Life Collective Dispensers is conveniently located at 22 West 66th Street, NY, NY, 10023, just steps away from Lincoln Center, Columbus Circle, and Central Park. Depending on your mode of transportation, here are some common routes:\n\nPublic Transit (Subway/Bus): You can take the subway to the 66th Street-Lincoln Center Station, which is served by the 1 train. From there, it\'s just a short walk eastward on 66th Street to reach Good Life Collective Dispensers. There\'s also the A/B/C/D trains at Columbus Circle, and the N/R/Q/W trains on 57th and 7th Avenue. FPD is a 5-minute walk from all of these trains. The M20 bus stops right in front of our entrance.\n\nDriving: If you\'re driving, you can use GPS navigation or a map application to guide you to the address. Be mindful of parking regulations in the area and consider using paid parking facilities nearby. There\'s a parking garage next to Good Life Collective.\n\nWalking: If you\'re already in the vicinity, walking can be a convenient option. Good Life Collective Dispensers is situated on 66th Street, between Central Park West and Columbus Avenue, making it easily accessible on foot.\n\nCycling: For cyclists, there are bike lanes available on many streets in New York City. You can plan your route using bike-friendly paths to reach Good Life Collective Dispensers safely.',
      open: false
    },
    {
      question: 'Do you deliver?',
      answer: 'FPD\'s free Weed Wheels delivery service is available for purchases over $90. We currently serve 10023 and 10024 and deliver 12pm-10pm, 7 days a week. Delivery orders must be prepaid using Aeropay.',
      open: false
    },
    {
      question: "What is there to do in the neighborhood?",
      answer: `
      <strong>Cultural Events:</strong><br>
      - Attend live screenings of popular TV shows like "The View" or "Live with Ryan and Kelly" at ABC Studios.<br>
      - Catch a show at the iconic Lincoln Center, home to classical performances and contemporary plays.<br>
      - Jazz lovers can enjoy the soulful sounds of the New York Jazz Symphony at various venues.<br><br>
    
      <strong>Entertainment:</strong><br>
      - Visit the historic Beacon Theatre for live concerts and comedy shows.<br>
      - Catch the latest blockbuster or indie film at the AMC 68th Street Movie Theater.<br><br>
    
      <strong>Dining & Nightlife:</strong><br>
      - Indulge in French-American cuisine at Café Luxembourg.<br>
      - Enjoy American classics at The Smith.<br>
      - Sip literary-themed cocktails at The Dead Poet.<br>
      - Grab quick bites from legendary spots like Gray’s Papaya, Chirping Chicken, Zabar’s, Fairway, Citarella, and Magnolia Bakery.<br><br>
    
      <strong>Outdoor Activities:</strong><br>
      - Explore the iconic Central Park, just a short walk away.<br>
      - Popular spots include Sheep Meadow, Tavern on the Green, the Great Lawn, and Strawberry Fields.<br>
      - FPD is the closest dispensary to the park!<br><br>
    
      <strong>Shopping:</strong><br>
      - Take a stroll down Columbus Avenue for boutique shops and artisanal stores.<br>
      - Visit the Time Warner Center or check out the winter holiday market at Columbus Circle.<br>
      - Book lovers can browse the curated selection at Book Culture, an independent bookstore offering literature, art books, and more.`,
      open: false
    }
];



  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
