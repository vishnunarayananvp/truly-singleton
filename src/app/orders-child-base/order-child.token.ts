import { InjectionToken } from "@angular/core";

export const ORDER_CHILD_TOKEN = new InjectionToken("ORDER_CHILD_TOKEN", {
  providedIn: "root",
  factory: () => {
    return {
      value: "Token base value",
    };
  },
});
