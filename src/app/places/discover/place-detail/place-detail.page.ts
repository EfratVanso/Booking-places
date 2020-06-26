import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public place:Place;
  constructor(
    private route: ActivatedRoute,
     private placesService: PlacesService,
      private navCtrl: NavController) { }
  ngOnInit() {
    this.route.paramMap.subscribe(pMap =>{
      if(!pMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(pMap.get('placeId'));
     });
  }

  onBookPlace(){
 //this.router.navigateByUrl("places/tabs/discover");
 this.navCtrl.navigateBack('places/tabs/discover');
}
}
