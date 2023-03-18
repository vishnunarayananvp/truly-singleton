import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OrdersGrandChildComponent } from "./orders.component";

const routes: Routes = [
  {
    path: "",
    component: OrdersGrandChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersGrandChildRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
