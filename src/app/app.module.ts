import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { MatSidenavModule,MatSidenavContainer } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatCardModule} from  '@angular/material/card'
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDividerModule}  from '@angular/material/divider';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component'
import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
  declarations: [AppComponent, ProjectComponent, AboutComponent, ChatComponent, ContactComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule,
    MatButtonModule,MatBadgeModule, MatSidenavModule,  MatIconModule,
    MatToolbarModule, MatSidenavContainer,MatCardModule, MatTooltipModule,
    MatDividerModule,
     ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
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
