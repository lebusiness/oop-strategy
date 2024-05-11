import { TQuackBehavior } from "./interface/quackBehavior";

export class DisableQuackBehavior implements TQuackBehavior {
  quack() {
    console.log("Я не умею крякать");
  }
}
