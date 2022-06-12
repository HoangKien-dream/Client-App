import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppClientComponent } from './components/app-client/app-client.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListAccountComponent } from './components/list-account/list-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AppClientComponent,
    ProfileComponent,
    ListAccountComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
