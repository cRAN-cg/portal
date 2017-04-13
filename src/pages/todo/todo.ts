import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { Options } from ',,/options/options'

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class todoPage {

  constructor(public navCtrl: NavController){}
  goBack() {
    this.navCtrl.pop();
  }

}
