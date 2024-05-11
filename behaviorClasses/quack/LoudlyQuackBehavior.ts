import { TQuackBehavior } from "./interface/quackBehavior";

export class LoudlyQuackBehavior implements TQuackBehavior {
  quack() {
    console.log("Я крякаю громко");
  }
}
