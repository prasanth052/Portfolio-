import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { MatSidenavModule,MatSidenavContainer } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatCardModule} from  '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDividerModule}  from '@angular/material/divider'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavContainer,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    //  { provide:new HttpClient(withFetch)}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
