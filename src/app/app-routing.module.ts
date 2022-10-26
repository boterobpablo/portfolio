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
    loadChildren: () => import('./screens/product-card/product-card.module').then(m => m.ProductCardModule)
  },
  {
    path: 'tip-calculator',
    loadChildren: () => import('./screens/tip-calculator/tip-calculator.module').then(m => m.TipCalculatorModule)
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
