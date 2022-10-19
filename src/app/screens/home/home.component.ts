import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Product Preview Card',
      description: 'HTML CSS',
      path: '/product-card',
      img: '/assets/images/product-card-design.jpg',
      alt: 'Product Preview Card'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
