import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { SportComponent } from './sport/sport.component';
import { LifeComponent } from './life/life.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VideoComponent,
    SportComponent,
    LifeComponent,
    TechnologyComponent,
    ContactComponent,
    FooterComponent,
    SidebarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
   providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
