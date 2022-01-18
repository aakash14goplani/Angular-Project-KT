import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { HoistingPageComponent } from './hoisting-page/hoisting-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'packages', component: PackagesPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'start-hosting', component: HoistingPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
