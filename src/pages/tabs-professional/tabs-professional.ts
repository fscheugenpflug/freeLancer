import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { PendingPage } from '../pending/pending';
import { ProfileProfessionalPage } from '../profile-professional/profile-professional';
import { LoginPage } from '../auth/login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-tabs-professional',
  templateUrl: 'tabs-professional.html',
})
export class TabsProfessionalPage {

  tab1Root = ProfileProfessionalPage;
  tab2Root = EventsPage;
  tab3Root = PendingPage;


  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) { }

  logout() {
    this.authService.logout()
    this.navCtrl.push(LoginPage)
  }
}
