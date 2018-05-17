import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  canvas: any;
  signaturePad: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePage');
  };

  // this.canvas = document.querySelector("canvas");
  // this.signaturePad = new SignaturePad(canvas);

  // // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
  // signaturePad.toDataURL();
}
