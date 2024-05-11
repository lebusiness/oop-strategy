import { DisableFlyBehavior } from "../behaviorClasses/fly";
import { DisableQuackBehavior } from "../behaviorClasses/quack";
import { Duck } from "../superclass/Duck";

export class RubberDuck extends Duck {
  constructor() {
    super(
      "Резиновая утка",
      new DisableFlyBehavior(),
      new DisableQuackBehavior()
    );
  }
}
