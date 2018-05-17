import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { EventsPage } from '../events/events';
import { PendingPage } from '../pending/pending';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../auth/login/login';

@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = CategoriesPage;
  tab2Root = EventsPage;
  tab3Root = PendingPage;

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {}

  logout() {
    this.authService.logout()
    this.navCtrl.push(LoginPage)
  }
}
