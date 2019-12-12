import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OptionsComponent } from './options/options.component';
import { ContactComponent } from './options/contact/contact.component';
import { HoursComponent } from './options/hours/hours.component';
import { ServicesComponent } from './options/services/services.component';
import { MapComponent } from './options/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OptionsComponent,
    ContactComponent,
    HoursComponent,
    ServicesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
