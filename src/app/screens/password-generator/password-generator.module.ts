import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordGeneratorRoutingModule } from './password-generator-routing.module';
import { PasswordGeneratorComponent } from './password-generator.component';

@NgModule({
  declarations: [PasswordGeneratorComponent],
  imports: [CommonModule, PasswordGeneratorRoutingModule],
})
export class PasswordGeneratorModule {}
