import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersChildTwoComponent } from "./orders-child-two.component";
import { OrdersChildModule } from "../orders-child-base/orders-child.module";
import { RouterModule } from "@angular/router";
import { OrdersChildBaseService } from "../orders-child-base/orders-child-base.service";
import { OrdersChildTwoService } from "./orders-child-two.service";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@NgModule({
  imports: [
    CommonModule,
    OrdersChildModule,
    RouterModule.forChild([
      {
        path: "",
        component: OrdersChildTwoComponent,
      },
    ]),
  ],
  declarations: [OrdersChildTwoComponent],
  exports: [OrdersChildTwoComponent],
  providers: [
    {
      provide: ORDER_CHILD_TOKEN,
      useValue: {
        value: "Injection token two",
      },
    },
    {
      provide: OrdersChildBaseService,
      useClass: OrdersChildTwoService,
    },
  ],
})
export class OrdersChildTwoModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
