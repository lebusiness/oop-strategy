import type { TFlyBehavior } from "./interface/flyBehavior";

export class RocketFlyBehavior implements TFlyBehavior {
  fly() {
    console.log("Я летаю на ракете");
  }
}
