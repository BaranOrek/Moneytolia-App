import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { OfferCreatePageComponent } from './pages/offer-create-page/offer-create-page.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { FormDiologComponent } from './components/form-diolog/form-diolog.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const appRoutes: Routes = [
  { path: '', component: OfferCreatePageComponent },
  { path: 'kampanyalar', component: OffersPageComponent },
  { path: 'giris', component: LoginPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OffersPageComponent,
    OfferCreatePageComponent,
    AddOfferComponent,
    FormDiologComponent,
    LoginPageComponent
  ],
  entryComponents: [FormDiologComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
