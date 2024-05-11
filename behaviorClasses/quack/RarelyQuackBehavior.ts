import { TQuackBehavior } from "./interface/quackBehavior";

export class RarelyQuackBehavior implements TQuackBehavior {
  quack() {
    console.log("Я крякаю редко");
  }
}
