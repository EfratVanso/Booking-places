import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

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
      private navCtrl: NavController,
      private modalCtrl: ModalController,
      private actionSheetController:ActionSheetController
      ) { }
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
    this.actionSheetController.create(
      {
        header:'Choose an action',
        buttons:[
          {
            text:'Select Date',
            handler: () =>{
              this.openBookingModal('select');
            }
          },
          {
            text:'Random Date',
            handler: () =>{
              this.openBookingModal('random');
            }
          },
          {
            text:'Cancel',
            role:'cancel'
          }, 
        ]
      }).then( actioSheetEl => {
        actioSheetEl.present();
      })
}
openBookingModal(mode: 'select' | 'random'){
      console.log(mode);

      //this.navCtrl.navigateBack('places/tabs/discover');
    this.modalCtrl.create({component: CreateBookingComponent,
      componentProps:{selectedPlace: this.place}})//passing data(place) to the modal (CreateBookingComponent)
      .then(modalEl =>{
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then( resultData =>{
        console.log(resultData.data, resultData.role);//get the passed data
        if(resultData.role === 'confirm')
          console.log('BOOKED!');
      });
}
}
