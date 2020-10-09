import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelInfoPage } from './travel-info.page';

const routes: Routes = [
  {
    path: '',
    component: TravelInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelInfoPageRoutingModule {}
