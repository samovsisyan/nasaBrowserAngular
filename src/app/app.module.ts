import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeComponent } from './components/home/home.component';
import { CarouserlBasicComponent } from './components/home/carouserl-basic/carouserl-basic.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NearbyAsteroidsComponent } from './components/nearby-asteroids/nearby-asteroids.component';
import { AstronomyPictureComponent } from './components/astronomy-picture/astronomy-picture.component';
import { SubmitNewPlanetComponent } from './components/submit-new-planet/submit-new-planet.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'asteroids', component: NearbyAsteroidsComponent },
  { path: 'apod', component: AstronomyPictureComponent },
  { path: 'submit-planet', component: SubmitNewPlanetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouserlBasicComponent,
    NearbyAsteroidsComponent,
    AstronomyPictureComponent,
    SubmitNewPlanetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    }),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
      return new TranslateHttpLoader(http, './assets/translate/','.json');
}
