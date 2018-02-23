import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username = '';
  private password = '';
  private error = '';

  public rootPage : any=TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ok() {
    console.log('ok'+ this.password)
    if(this.password == '123') {
      this.navCtrl.push(TabsPage)
    } else {
      this.error="Masukin password dengan benar"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}