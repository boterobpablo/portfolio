import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TipCalculatorRoutingModule } from './tip-calculator-routing.module';
import { TipCalculatorComponent } from './tip-calculator.component';


@NgModule({
  declarations: [
    TipCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TipCalculatorRoutingModule
  ]
})
export class TipCalculatorModule { }
