import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { OrdersChildOneComponent } from "./orders-child-one.component";
import { OrdersChildBaseService } from "../orders-child-base/orders-child-base.service";
import { OrdersChildOneService } from "./orders-child-one.service";
import { OrdersChildModule } from "../orders-child-base/orders-child.module";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@NgModule({
  imports: [
    CommonModule,
    OrdersChildModule,
    RouterModule.forChild([
      {
        path: "",
        component: OrdersChildOneComponent,
        children: [
          {
            path: "grand-child",
            loadChildren: () =>
              import("../orders-grand-child/orders.module").then(
                (m) => m.OrdersGrandChildModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [OrdersChildOneComponent],
  exports: [OrdersChildOneComponent, RouterModule],
  providers: [
    {
      provide: OrdersChildBaseService,
      useClass: OrdersChildOneService,
    },
    {
      provide: ORDER_CHILD_TOKEN,
      useValue: {
        value: "Injection token one",
      },
    },
  ],
})
export class OrdersChildOneModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
