import { TQuackBehavior } from "./interface/quackBehavior";

export class SlowlyQuackBehavior implements TQuackBehavior {
  quack() {
    console.log("Я крякаю протяжно");
  }
}
