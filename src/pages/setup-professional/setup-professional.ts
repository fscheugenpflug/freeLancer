import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { TabsProfessionalPage } from '../tabs-professional/tabs-professional';

/**
 * Generated class for the SetupProfessionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-setup-professional",
  templateUrl: "setup-professional.html"
})
export class SetupProfessionalPage {
  description: string;
  street: string;
  city: string;
  postcode: number;
  country: string;
  error = null;
  feedbackEnabled = false;
  processing = false;
  base64Image: string;
  picture= true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private camera: Camera
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SetupProfessionalPage");
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

  this.camera.getPicture(options).then((imageData) => {
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    console.log(err)
  })
  };

  openGallery(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err)
    });
  }

  uploadPicture(){

  }
  
  submitForm(form) {
    console.log(form)
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const setup: any ={
        description: this.description,
        street: this.street,
        city: this.city,
        postcode: this.postcode,
        country: this.country
      };
      this.authService.updateInfoProfessional(setup)
      .then((result) => {
        console.log(result);
        this.navCtrl.push(TabsProfessionalPage);
      })
      .catch((err) => {
        this.error = err.error.code;
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }
}
