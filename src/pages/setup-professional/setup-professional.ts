import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { TabsProfessionalPage } from '../tabs-professional/tabs-professional';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the SetupProfessionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

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
  picture = true;
  lastImage: string = null;
  // loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private camera: Camera,
    private transfer: Transfer,
    private file: File
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SetupProfessionalPage");
  }

  

//   openCamera() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     };

//     this.camera.getPicture(options).then(
//       imageData => {
//         this.base64Image = "data:image/jpeg;base64," + imageData;
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   public presentActionSheet() {
//     let actionSheet = this.actionSheetCtrl.create({
//       title: 'Select Image Source',
//       buttons: [
//         {
//           text: 'Load from Library',
//           handler: () => {
//             this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
//           }
//         },
//         {
//           text: 'Use Camera',
//           handler: () => {
//             this.takePicture(this.camera.PictureSourceType.CAMERA);
//           }
//         },
//         {
//           text: 'Cancel',
//           role: 'cancel'
//         }
//       ]
//     });
//     actionSheet.present();
//   }
// }

// public takePicture(sourceType) {
//   // Create options for the Camera Dialog
//   var options = {
//     quality: 100,
//     sourceType: sourceType,
//     saveToPhotoAlbum: false,
//     correctOrientation: true
//   };
//   this.camera.getPicture(options).then((imagePath) => {
//       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
//       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
//       this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//     }, (err) => {
//     this.presentToast('Error while selecting image.');
//   });
// }

// private createFileName() {
//   var d = new Date(),
//     n = d.getTime(),
//     newFileName = n + ".jpg";
//   return newFileName;
// }

// // Copy the image to a local folder
// private copyFileToLocalDir(namePath, currentName, newFileName) {
//   this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
//     this.lastImage = newFileName;
//   }, error => {
//     this.presentToast('Error while storing file.');
//   });
// }
 
// private presentToast(text) {
//   let toast = this.toastCtrl.create({
//     message: text,
//     duration: 3000,
//     position: 'top'
//   });
//   toast.present();
// }

// // Always get the accurate path to your apps folder
// public pathForImage(img) {
//   if (img === null) {
//     return '';
//   } else {
//     return cordova.file.dataDirectory + img;
//   }
// }

// public uploadImage() {
//   // Destination URL
//   var url = "http://yoururl/upload.php";

//   // File for Upload
//   var targetPath = this.pathForImage(this.lastImage);

//   // File name only
//   var filename = this.lastImage;

//   var options = {
//     fileKey: "file",
//     fileName: filename,
//     chunkedMode: false,
//     mimeType: "multipart/form-data",
//     params: { 'fileName': filename }
//   };

//   const fileTransfer: TransferObject = this.transfer.create();

//   this.loading = this.loadingCtrl.create({
//     content: 'Uploading...',
//   });
//   this.loading.present();

//   // Use the FileTransfer to upload the image
//   fileTransfer.upload(targetPath, url, options).then(data => {
//     this.loading.dismissAll()
//     this.presentToast('Image succesful uploaded.');
//   }, err => {
//     this.loading.dismissAll()
//     this.presentToast('Error while uploading file.');
//   });
// }

  // openGallery() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };

  //   this.camera.getPicture(options).then(
  //     imageData => {
  //       this.base64Image = "data:image/jpeg;base64," + imageData;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // uploadPicture() {}

  submitForm(form) {
    console.log(form);
    this.error = "";
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const setup: any = {
        description: this.description,
        street: this.street,
        city: this.city,
        postcode: this.postcode,
        country: this.country
      };
      this.authService
        .updateInfoProfessional(setup)
        .then(result => {
          console.log(result);
          this.navCtrl.push(TabsProfessionalPage);
        })
        .catch(err => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
