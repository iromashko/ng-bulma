import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';

const routes: Routes = [
  {
    path: 'credit-card-form',
    component: CreditCardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
