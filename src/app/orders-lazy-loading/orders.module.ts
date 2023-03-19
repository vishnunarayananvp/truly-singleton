import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersLazyComponent } from "./orders.component";

@NgModule({
  imports: [CommonModule, OrdersRoutingModule],
  declarations: [OrdersLazyComponent],
})
export class OrdersLazyModule {}
