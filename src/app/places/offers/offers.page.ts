import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];
  constructor( private placesService: PlacesService,private router: Router) { }


  ngOnInit() {
    this.offers = this.placesService.places;
  }
  onEdit(offerId :string, slidingItem: IonItemSliding){
    console.log('Editing item', offerId);
    this.router.navigateByUrl('/places/tabs/offers/edit/' +offerId);
    slidingItem.close();
  }
}
