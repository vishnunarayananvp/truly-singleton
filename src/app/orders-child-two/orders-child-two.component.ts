import { Component } from "@angular/core";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";
import { OrdersChildBaseService } from "../orders-child-base/orders-child-base.service";
import { OrdersChildTwoService } from "./orders-child-two.service";

@Component({
  selector: "app-orders-child-two",
  templateUrl: "./orders-child-two.component.html",
  styleUrls: ["./orders-child-two.component.css"],
  providers: [
    // {
    //   provide: ORDER_CHILD_TOKEN,
    //   useFactory: () => {
    //     return {
    //       value: "Injection token two",
    //     };
    //   },
    // },
  ],
})
export class OrdersChildTwoComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
