import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendingPage } from '../pending/pending';
import { ListingProfessionalsPage } from '../listing-professionals/listing-professionals';
import { EventsPage } from '../events/events';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-categories",
  templateUrl: "categories.html"
})
export class CategoriesPage {
  categories: Array<any>;

  tab1Root 
  tab2Root = EventsPage;
  tab3Root = PendingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [
      {
        profession: "Web Developer",
        imageUrl:
          "https://blog.brainstation.io/wp-content/uploads/2017/04/web-960x502.jpg"
      },
      {
        profession: "UX / UI",
        imageUrl:
          "https://i2.wp.com/www.2leaf.com/wp-content/uploads/pexels-photo-273230.jpeg?resize=620%2C380&ssl=1"
      },
      {
        profession: "Photographer",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Leica_M9_%28front%29.jpg/1920px-Leica_M9_%28front%29.jpg"
      },
      {
        profession: "Chef",
        imageUrl:
          "https://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_desktop_1x/public/701/most-americans-not-eating-enough-fruits-vegetables.jpg?itok=e5--aGGb&timestamp=1511667827"
      },
      {
        profession: "Carpenter",
        imageUrl: "https://i.ytimg.com/vi/DQ3btCZ9VTQ/maxresdefault.jpg"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoriesPage");
  }

  goToCategory(category) {
    console.log(category);
    this.navCtrl.push(ListingProfessionalsPage, category);
  }
}
