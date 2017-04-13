import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { todoPage } from '../todo/todo';

// import { Options } from ',,/options/options'

@Component({
  selector: 'page-home',
  templateUrl: './home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){}
  navigate() {
    this.navCtrl.push(todoPage);
  }

}
