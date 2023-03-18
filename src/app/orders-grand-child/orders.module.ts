import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersGrandChildRoutingModule } from "./orders-routing.module";
import { OrdersGrandChildComponent } from "./orders.component";
import { OrdersChildModule } from "../orders-child-base/orders-child.module";

@NgModule({
  imports: [CommonModule, OrdersGrandChildRoutingModule, OrdersChildModule],
  declarations: [OrdersGrandChildComponent],
})
export class OrdersGrandChildModule {}
