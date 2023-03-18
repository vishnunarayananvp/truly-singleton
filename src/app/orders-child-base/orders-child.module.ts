import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersChildComponent } from "./orders-child.component";
import { OrdersChildBaseService } from "./orders-child-base.service";

@NgModule({
  imports: [CommonModule],
  declarations: [OrdersChildComponent],
  exports: [OrdersChildComponent],
  providers: [OrdersChildBaseService],
})
export class OrdersChildModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
