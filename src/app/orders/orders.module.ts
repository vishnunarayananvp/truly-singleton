import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersComponent } from "./orders.component";
import { OrdersChildOneModule } from "../orders-child-one/orders-child-one.module";
import { OrdersChildTwoModule } from "../orders-child-two/orders-child-two.module";

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersChildOneModule,
    OrdersChildTwoModule,
  ],
  declarations: [OrdersComponent],
})
export class OrdersModule {}
