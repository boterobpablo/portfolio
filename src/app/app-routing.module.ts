import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: '',
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
