import { Inject, Injectable } from "@angular/core";
import { ORDER_CHILD_TOKEN } from "../orders-child-base/order-child.token";

@Injectable()
export class OrdersChildOneService {
  constructor(@Inject(ORDER_CHILD_TOKEN) private token: { value: string }) {}

  instanceName(): string {
    return "Instance one";
  }

  tokenValue(): string {
    return this.token.value;
  }
}
