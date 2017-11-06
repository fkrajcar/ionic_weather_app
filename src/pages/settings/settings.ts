import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  country:string;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage

  
  ) {
    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      }
      else{
        this.city = "Rijeka";
        this.country = "Serbia";
      }


    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let location = {
      city: this.city,
      country: this.country
    }

    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
