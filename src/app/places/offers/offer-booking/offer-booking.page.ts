import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {
  place: Place;
  constructor(private navCtrl:NavController, private rout:ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBack(){
    this.navCtrl.navigateBack('places/tabs/offers');
  }
}
