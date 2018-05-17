import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsProfessionalPage } from '../pages/tabs-professional/tabs-professional';

// import { WelcomePage } from '../pages/welcome/welcome';
// import { RequestPage } from '../pages/request/request';
// import { SetupProfessionalPage } from '../pages/setup-professional/setup-professional';
// import { PendingPage } from '../pages/pending/pending';
// import { SignupPage } from '../pages/auth/signup/signup';
// import { CategoriesPage } from '../pages/categories/categories';
// import { ProfileProfessionalPage } from '../pages/profile-professional/profile-professional';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsProfessionalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
