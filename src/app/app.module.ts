import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav/nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MainLayaoutComponent } from './layout/main-layaout/main-layaout.component';
import { FooterComponent } from './layout/nav/footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CarnetComponent } from './carnet/carnet.component';
import { QrCodeModule } from 'ng-qrcode';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    MainLayaoutComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    CarnetComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, QrCodeModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
