import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// -- Pages 
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/auth/login/login';
import { SignupPage } from '../pages/auth/signup/signup';
import { SetupProfessionalPage } from '../pages/setup-professional/setup-professional';
import { CategoriesPage } from '../pages/categories/categories';
import { ProfileProfessionalPage } from '../pages/profile-professional/profile-professional';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// -- Services
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CustomerServiceProvider } from '../providers/customer-service/customer-service';
import { ListingProfessionalsPage } from '../pages/listing-professionals/listing-professionals';
import { ProfessionalDetailPage } from '../pages/professional-detail/professional-detail';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    SetupProfessionalPage,
    ProfileProfessionalPage,
    CategoriesPage,
    ListingProfessionalsPage,
    ProfessionalDetailPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    SetupProfessionalPage,
    ProfileProfessionalPage,
    CategoriesPage,
    ListingProfessionalsPage,
    ProfessionalDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    CustomerServiceProvider
  ]
})
export class AppModule {}
