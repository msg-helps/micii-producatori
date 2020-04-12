import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './modules/register/register.module';
import { UserModule } from './modules/user/user.module';
import { MainModule } from './modules/main/main.module';
import { ProductsModule } from './modules/products/products.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthModule } from './modules/auth/auth.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EventEmitterService } from './modules/event-emitter/event-emitter.service';
import { JwtInterceptor } from './helpers/jwt.interceptor'
import { ErrorInterceptor } from './helpers/error.interceptor'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    HttpClientModule,
    UserModule,
    MainModule,
    ProductsModule,
    AuthModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    EventEmitterService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
