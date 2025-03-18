import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [HeroComponent, RouterModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      title: 'Navigating Cannabis Dispensaries in NYC: Legal vs. Illicit (And Why Support for Legal Ones Matters)',
      description: 'In recent years, the landscape of cannabis distribution in New York City has undergone significant changes. With the legalization of recreational marijuana, the city has seen a surge in both legal and illicit dispensaries. However, understanding the differences between the two and advocating for legal dispensaries can have far-reaching benefits for the community. In this post, we\'ll delve into the disparities between legal and illicit cannabis dispensaries in NYC and explore why supporting legal ones is crucial.',
      image: 'assets/blog1.jpg', // Replace with actual image path
      link: '/blog/legal-vs-illicit'
    },
    {
      id: 2,
      title: 'Exploring the Science of Cannabis: Understanding THC, CBD, and Beyond',
      description: 'As we unravel the intricate science of cannabis, it becomes clear that this remarkable plant holds immense promise for both recreational and medicinal purposes. Whether you\'re intrigued by the psychoactive properties of THC, the therapeutic potential of CBD, or the synergistic effects of combining multiple cannabinoids, understanding the science behind cannabis can open doors to a deeper appreciation of its profound benefits. Stay informed, stay curious, and continue exploring the boundless possibilities that cannabis science has to offer.',
      image: 'assets/blog2.jpg', // Replace with actual image path
      link: '/blog/science-of-cannabis'
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Cannabis Products: Flower, Edibles, Vapes, and More',
      description: 'Whether you\'re seeking relaxation, pain relief, or simply looking to explore the wide world of cannabis products, this guide has you covered. By understanding the different types of products available, their unique properties, and how to choose the right one for your needs, you can embark on your cannabis journey with confidence and clarity. Remember to consume responsibly and stay informed about the latest trends and innovations in the ever-evolving world of cannabis.',
      image: 'assets/blog3.jpg', // Replace with actual image path
      link: '/blog/cannabis-products-guide'
    },
    {
      id: 4,
      title: 'Nurturing Minds: Exploring the Relationship Between Cannabis and Mental Health',
      description: ' The relationship between cannabis and mental health is a multifaceted and evolving topic that requires careful consideration and exploration. While cannabis may offer relief for some individuals struggling with anxiety, depression, PTSD, and addiction, it\'s not a one-size-fits-all solution. By fostering open dialogue, supporting further research, and promoting responsible use, we can cultivate understanding and compassion for those navigating the complex intersection of cannabis and mental health.',
      image: 'assets/blog4.jpg', // Replace with actual image path
      link: '/blog/cannabis-products-guide'
    },
    {
      id: 5,
      title: 'Elevated Dining: Mastering Cannabis-infused Recipes at Home',
      description: 'Cooking with cannabis opens up a world of culinary possibilities, allowing you to infuse your favorite dishes with the healing properties of this versatile plant. Whether you\'re indulging in decadent brownies, savoring delicate cookies, or crafting savory meals infused with cannabis, the experience is sure to delight the senses and soothe the soul. So don your apron, gather your ingredients, and embark on a culinary journey that elevates the art of dining to new heights.',
      image: 'assets/blog5.jpg', // Replace with actual image path
      link: '/blog/cannabis-products-guide'
    },
    {
      id: 6,
      title: 'Navigating the Green Frontier: An Introduction to Cannabis Laws in New York',
      description: 'The legalization of adult-use cannabis in New York represents a significant milestone in the state\'s journey towards cannabis reform. By embracing principles of social equity, regulation, and responsible consumption, New York is paving the way for a more inclusive and sustainable cannabis industry that prioritizes public health, economic opportunity, and social justice. As we embark on this new chapter, let us tread carefully, but boldly, towards a future where cannabis is recognized for its potential to heal, inspire, and unite communities across the Empire State.',
      image: 'assets/blog6.jpg', // Replace with actual image path
      link: '/blog/cannabis-products-guide'
    },
    {
      id: 7,
      title: 'From Prohibition to Progress: A Brief History of Cannabis Legalization',
      description: 'The journey of cannabis from prohibition to progress is a testament to the power of grassroots activism, political mobilization, and shifting cultural attitudes. While the road towards legalization has been long and arduous, the strides made in recent years offer hope for a more just and compassionate approach to drug policy. As we continue to navigate the complex landscape of cannabis legality, it is imperative that we remain vigilant in our pursuit of equity, justice, and social change.',
      image: 'assets/blog7.jpg', // Replace with actual image path
      link: '/blog/cannabis-products-guide'
    }
  ];
}
