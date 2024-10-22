import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    PeopleComponent,
    MenuComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
