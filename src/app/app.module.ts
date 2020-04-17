import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './modules/register/register.module';
import { UserModule } from './modules/user/user.module';
import { MainModule } from './modules/main/main.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EventEmitterService } from './modules/event-emitter/event-emitter.service';
import {EffectsModule} from "@ngrx/effects";
import {appReducers} from "./modules/state/app.state";
import {StoreModule} from "@ngrx/store";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    UserModule,
    MainModule,
    ProductsModule,
    AuthModule,
    SharedModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
