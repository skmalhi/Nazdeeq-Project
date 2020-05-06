import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./public/login/login.component";
import { PublicComponent } from "./public/public.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignupComponent } from "./public/signup/signup.component";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
  AuthServiceConfig,
} from "angularx-social-login";
import { SocialSignupComponent } from './public/social-signup/social-signup.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("801992059001-ihk536e4bkg62dbmdq7slgas3t4din8d.apps.googleusercontent.com"),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("240671880525684"),
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SignupComponent,
    SocialSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
