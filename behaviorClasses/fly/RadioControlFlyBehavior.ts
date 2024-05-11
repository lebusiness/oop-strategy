import type { TFlyBehavior } from "./interface/flyBehavior";

export class RadioControlFlyBehavior implements TFlyBehavior {
  fly() {
    console.log("Я летаю на радиоуправлении");
  }
}
