import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
const part1 = 'AIzaSyAyXfgyHzn3_';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const part3 = '2wK3CStN-1w';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsComponent } from './options/options.component';
import { PhotosComponent } from './photos/photos.component';
import { MapComponent } from './options/map/map.component';
import { AgmCoreModule } from '@agm/core';
const part2 = 'eH9p758QxIh';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OptionsComponent,
    PhotosComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: part1 + part2 + part3
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
