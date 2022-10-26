import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipCalculatorComponent } from './tip-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: TipCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipCalculatorRoutingModule { }
