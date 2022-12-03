import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'product-card',
    title: 'Product Card',
    loadChildren: () => import('./screens/product-card/product-card.module').then(m => m.ProductCardModule)
  },
  {
    path: 'tip-calculator',
    title: 'Tip Calculator',
    loadChildren: () => import('./screens/tip-calculator/tip-calculator.module').then(m => m.TipCalculatorModule)
  },
  {
    path: 'advice-generator',
    title: 'Advice Generator',
    loadChildren: () => import('./screens/advice-generator/advice-generator.module').then(m => m.AdviceGeneratorModule)
  },
  {
    path: 'password-generator',
    title: 'Password Generator',
    loadChildren: () => import('./screens/password-generator/password-generator.module').then(m => m.PasswordGeneratorModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
