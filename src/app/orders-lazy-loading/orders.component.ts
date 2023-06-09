import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders-lazy",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersLazyComponent {
  constructor(readonly router: Router) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
