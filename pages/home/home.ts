import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isShow: boolean;
  constructor(public navCtrl: NavController) {

  }


  buttonClicked() {
    console.log('button Clicked')
    this.isShow = !this.isShow;
  }

}
