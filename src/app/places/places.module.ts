import { DiscoverPageModule } from './discover/discover.module';
import { PlacesRoutingModule } from './places-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule,
    DiscoverPageModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
