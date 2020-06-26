import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

 
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mension',
      'In the heart of new york city',
      'https://i.insider.com/5ecc4a204dca685ebf183143?width=1100&format=jpeg&auto=webp',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in paris',
      'https://cdn.thespaces.com/wp-content/uploads/2017/02/paris-apartments-for-rent-Rue-de-Varenne-III-3-1.jpg',
       189.99
    ),
    new Place(
      'p3',
      'The Foggy Palaca',
      'Not your average city trip',
      'https://r-cf.bstatic.com/images/hotel/max1280x900/234/234686661.jpg',
       99.99
    ),


  ];

  get places() {
    return [...this._places];// copy of places array
  }
  constructor() { }

  getPlace(id){
    return {...this._places.find(p => p.id === id)};
  }
}
