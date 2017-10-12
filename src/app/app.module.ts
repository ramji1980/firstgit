import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {firstModule} from './firstcomponent/firstcomponent.module';
import {aboutusModule} from './aboutus/aboutus.module';
import {servicesModule} from './services/services.module';
import {portfolioModule} from './portfolio/portfolio.module';



const rootRouting : ModuleWithProviders =RouterModule.forRoot([])
@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    rootRouting,
    firstModule,
    aboutusModule,
    servicesModule,
    portfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
