import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Product Preview Card',
      description: 'HTML, CSS',
      path: '/product-card',
      img: '/assets/images/product-card-design.webp',
      alt: 'Product Preview Card',
    },
    {
      title: 'Tip Calculator',
      description: 'HTML, CSS, JavaScript',
      path: '/tip-calculator',
      img: '/assets/images/tip-calculator-design.webp',
      alt: 'Tip calculator',
    },
    {
      title: 'Advice Generator',
      description: 'HTML, CSS, JavaScript, API',
      path: '/advice-generator',
      img: '/assets/images/advice-generator-design.webp',
      alt: 'Advice generator',
    },
    {
      title: 'Password Generator',
      description: 'HTML, CSS, JavaScript',
      path: '/password-generator',
      img: '/assets/images/password-generator-design.webp',
      alt: 'Password generator',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
