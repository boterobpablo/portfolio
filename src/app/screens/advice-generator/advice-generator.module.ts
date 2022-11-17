import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceGeneratorRoutingModule } from './advice-generator-routing.module';
import { AdviceGeneratorComponent } from './advice-generator.component';

@NgModule({
  declarations: [AdviceGeneratorComponent],
  imports: [CommonModule, AdviceGeneratorRoutingModule],
})
export class AdviceGeneratorModule {}
