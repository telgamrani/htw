import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LooksComponent } from './looks/looks.component';

import { LookService } from './services/look.service';
import { InMemoryDataService } from './services/in-memory-data-service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [LookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
