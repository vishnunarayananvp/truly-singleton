import { Component, Inject } from "@angular/core";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@Component({
  selector: "app-orders-grand-child",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersGrandChildComponent {
  value = this.childToken.value || "No value";
  constructor(
    @Inject(ORDER_CHILD_TOKEN) private childToken: { value: string }
  ) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
