import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceGeneratorComponent } from './advice-generator.component';

const routes: Routes = [
  {
    path: '',
    component: AdviceGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceGeneratorRoutingModule {}
