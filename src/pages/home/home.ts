import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dash1 } from '../dash1/dash1.component';
import { Buttons } from '../buttons/buttons.component';
import { Cards } from '../cards/cards.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
page1(){
  this.navCtrl.push(Dash1);
}
page2(){
  this.navCtrl.push(Buttons);
}
page3(){
  this.navCtrl.push(Cards);
}
page4(){
  this.navCtrl.push(Dash1);
}
page5(){
  this.navCtrl.push(Dash1);
}
page6(){
  this.navCtrl.push(Dash1);
}
}
