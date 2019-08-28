import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvicesComponent } from './advices/advices.component';

const routes: Routes = [
  {path: 'advices', component: AdvicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
