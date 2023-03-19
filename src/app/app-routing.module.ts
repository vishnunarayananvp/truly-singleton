import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then((m) => m.OrdersModule),
  },
  {
    path: "orders-lazy",
    loadChildren: () =>
      import("./orders-lazy-loading/orders.module").then(
        (m) => m.OrdersLazyModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
