import { Inject, Injectable } from "@angular/core";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@Injectable()
export class OrdersGrandChildService {
  constructor(@Inject(ORDER_CHILD_TOKEN) private token: { value: string }) {}

  instanceName(): string {
    return "Instance Grand child";
  }

  tokenValue(): string {
    return this.token.value;
  }
}
