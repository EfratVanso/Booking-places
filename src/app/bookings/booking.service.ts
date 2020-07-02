import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[]=[
    {
      id:'xyz',
      placeId:'p1',
      placeTitle:'Manhetten',
      userId:'abc',
      guestNumber:2
    },
    {
      id:'xyz2',
      placeId:'p3',
      placeTitle:'Paris',
      userId:'abc2',
      guestNumber:3
    }
  ]
  constructor() { }

  get bookings(){
    return [...this._bookings];
  }
}
