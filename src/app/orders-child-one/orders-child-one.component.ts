import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@Component({
  selector: "app-orders-child-one",
  templateUrl: "./orders-child-one.component.html",
  styleUrls: ["./orders-child-one.component.css"],
  providers: [
    // {
    //   provide: ORDER_CHILD_TOKEN,
    //   useFactory: () => {
    //     return {
    //       value: "Injection token one",
    //     };
    //   },
    // },
  ],
})
export class OrdersChildOneComponent {
  constructor(readonly router: Router) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
