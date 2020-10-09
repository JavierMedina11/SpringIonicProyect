import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TravelInfoPageRoutingModule } from './travel-info-routing.module';

import { TravelInfoPage } from './travel-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TravelInfoPageRoutingModule
  ],
  declarations: [TravelInfoPage]
})
export class TravelInfoPageModule {}
