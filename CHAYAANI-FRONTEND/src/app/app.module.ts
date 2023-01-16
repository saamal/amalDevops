import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { MatDividerModule } from "@angular/material/divider";
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { InfoCardComponent } from './component/info-card/info-card.component';
import { TrajetCardComponent } from './component/trajet-card/trajet-card.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import {IgxCarouselModule, IgxSliderModule} from "igniteui-angular";
import { InscriptionComponent } from './component/inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OffreComponent} from "./component/offre/offre.component";
import {MatStepperModule} from "@angular/material/stepper";
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    InfoCardComponent,
    TrajetCardComponent,
    CarouselComponent,
    InscriptionComponent,
    OffreComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSliderModule,
        MatCardModule,
        RouterLink,
        RouterOutlet,
        AppRoutingModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        IgxCarouselModule,
        IgxSliderModule,
        FormsModule,
        HttpClientModule,
        MatStepperModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
