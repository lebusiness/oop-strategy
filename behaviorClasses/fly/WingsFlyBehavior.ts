import type { TFlyBehavior } from "./interface/flyBehavior";

export class WingsFlyBehavior implements TFlyBehavior {
  fly() {
    console.log("Я летаю на крыльях");
  }
}
