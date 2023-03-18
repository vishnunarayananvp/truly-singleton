import { Component } from "@angular/core";
import { OrdersChildBaseService } from "./orders-child-base.service";

@Component({
  selector: "app-orders-child",
  templateUrl: "./orders-child.component.html",
  styleUrls: ["./orders-child.component.css"],
  // providers: [OrdersChildBaseService],
})
export class OrdersChildComponent {
  instance = this.ordersChildBaseService.instanceName();
  tokenValue = this.ordersChildBaseService.tokenValue();

  constructor(private ordersChildBaseService: OrdersChildBaseService) {}
}
