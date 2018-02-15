import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';
import  { ListPage } from '../list/list';

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {
  private dataBerita = { title: '', photo: '', descripion: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public beritaProvider: BeritaProvider) {
  }

  input(){
    this.beritaProvider.saveBerita(this.dataBerita)
    this.navCtrl.push(ListPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

}
