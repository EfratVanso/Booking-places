import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  onBack(){
    this.navCtrl.navigateBack('places/tabs/offers');
  }
}
