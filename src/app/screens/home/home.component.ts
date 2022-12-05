import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/screens/portfolio/interfaces/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
      description: 'HTML, CSS, JS',
      path: '/tip-calculator',
      img: '/assets/images/tip-calculator-design.webp',
      alt: 'Tip calculator',
    },
    {
      title: 'Advice generator',
      description: 'HTML, CSS, JS, API',
      path: '/advice-generator',
      img: '/assets/images/advice-generator-design.webp',
      alt: 'Advice generator',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
