import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { HoistingPageComponent } from './hoisting-page/hoisting-page.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ModalComponent } from './common/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PackagesPageComponent,
    CustomersPageComponent,
    HoistingPageComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
