import { Injectable, Inject } from "@angular/core";
import { ORDER_CHILD_TOKEN } from "./order-child.token";

@Injectable()
export class OrdersChildBaseService {
  constructor(@Inject(ORDER_CHILD_TOKEN) private token: { value: string }) {}

  instanceName(): string {
    return "Base instance";
  }

  tokenValue(): string {
    return this.token.value;
  }
}
