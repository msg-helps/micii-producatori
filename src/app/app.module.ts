import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from "./modules/register/register.module";
import { UserModule } from "./modules/user/user.module";
import {MainModule} from "./modules/main/main.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    UserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
