import type { TFlyBehavior } from "./interface/flyBehavior";

export class DisableFlyBehavior implements TFlyBehavior {
  fly() {
    console.log("Я не умею летать");
  }
}
