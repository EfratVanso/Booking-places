import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  public place:Place;
  constructor(
    private route: ActivatedRoute,
     private placesService: PlacesService,
      private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pMap =>{
      if(!pMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(pMap.get('placeId'));
     });
    }

}
