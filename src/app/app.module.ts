import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";


import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { AboutComponent } from './about/about.component';
//import {AppRouters} from './app.routes';
import { ResumeComponent } from './resume/resume.component';
import { MaterialModule } from './material.module';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    SpeedDialFabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule

    //AppRouters,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
