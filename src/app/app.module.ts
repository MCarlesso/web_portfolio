import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListComponentComponent,
    PageComponentComponent,
    MenuComponentComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
      // Add an icon to the library for convenient access in other components
      library.add(faLinkedinIn, faGithub);
    }
}
