import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  public place: Place;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pMap => {
      if (!pMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(pMap.get('placeId'));

      this.form = new FormGroup({
        title: new FormControl(this.place.title,// default val
          {
            updateOn: 'blur',// updating when loose focous
            validators: [Validators.required]
          }),
        description: new FormControl(this.place.description,
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
      });
    });
  }
  onUpdateOffer(){
    if (!this.form.valid){
     return;
    }
  }

}
