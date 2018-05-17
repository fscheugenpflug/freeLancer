// -- Modules
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CallNumber } from "@ionic-native/call-number";

// -- Camera
import { File } from "@ionic-native/file";
import { Transfer } from "@ionic-native/transfer";
import { Camera } from "@ionic-native/camera";

// -- Pages 
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/auth/login/login';
import { SignupPage } from '../pages/auth/signup/signup';
import { SetupProfessionalPage } from '../pages/setup-professional/setup-professional';
import { CategoriesPage } from '../pages/categories/categories';
import { ProfileProfessionalPage } from '../pages/profile-professional/profile-professional';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestPage } from '../pages/request/request';

// -- Services
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CustomerServiceProvider } from '../providers/customer-service/customer-service';
import { ListingProfessionalsPage } from '../pages/listing-professionals/listing-professionals';
import { ProfessionalDetailPage } from '../pages/professional-detail/professional-detail';
import { DealServiceProvider } from '../providers/deal-service/deal-service';
import { PendingPage } from '../pages/pending/pending';
import { EventsPage } from '../pages/events/events';
import { EventsDetailPage } from '../pages/events-detail/events-detail';
import { PendingDetailPage } from '../pages/pending-detail/pending-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsProfessionalPage } from '../pages/tabs-professional/tabs-professional';
import { UpdatePendingDealPage } from '../pages/update-pending-deal/update-pending-deal';
// import { SignaturePage } from '../pages/signature/signature';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    TabsProfessionalPage,
    SetupProfessionalPage,
    ProfileProfessionalPage,
    CategoriesPage,
    ListingProfessionalsPage,
    ProfessionalDetailPage,
    RequestPage,
    EventsPage,
    EventsDetailPage,
    // SignaturePage,
    PendingPage,
    PendingDetailPage,
    UpdatePendingDealPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    TabsProfessionalPage,
    SetupProfessionalPage,
    ProfileProfessionalPage,
    CategoriesPage,
    ListingProfessionalsPage,
    ProfessionalDetailPage,
    RequestPage,
    EventsPage,
    EventsDetailPage,
    // SignaturePage,
    PendingPage,
    PendingDetailPage,
    UpdatePendingDealPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    CustomerServiceProvider,
    CallNumber,
    DealServiceProvider,
    File,
    Transfer,
    Camera
  ]
})
export class AppModule {}
