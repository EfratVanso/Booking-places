import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // Router,
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
