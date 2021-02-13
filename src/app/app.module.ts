import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {AboutComponent} from "./about/about.component";
import {CartService} from "./services/cart.service";
import {CartPopupComponent} from "./pages/cart/cart-popup/cart-popup.component";
import {ProductService} from "./services/products.service";
import { HomeComponent } from './home/home.component';
import { SocialLoginModule, SocialAuthServiceConfig } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
  MicrosoftLoginProvider
} from "angularx-social-login";

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        AboutComponent,
        CartPopupComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        SocialLoginModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CartService,ProductService,
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: true,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
              ),
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('561602290896109'),
            },
            {
              id: AmazonLoginProvider.PROVIDER_ID,
              provider: new AmazonLoginProvider(
                'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
              ),
            },
            {
              id: VKLoginProvider.PROVIDER_ID,
              provider: new VKLoginProvider(
                '7624815'
              ),
            },
            {
              id: MicrosoftLoginProvider.PROVIDER_ID,
              provider: new MicrosoftLoginProvider('0611ccc3-9521-45b6-b432-039852002705'),
            }
          ],
        } as SocialAuthServiceConfig,
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
