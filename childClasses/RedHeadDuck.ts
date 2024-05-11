import { WingsFlyBehavior } from "../behaviorClasses/fly";
import { DisableQuackBehavior } from "../behaviorClasses/quack";
import { Duck } from "../superclass/Duck";

export class RedHeadDuck extends Duck {
  constructor() {
    super(
      "Красноголовая утка",
      new WingsFlyBehavior(),
      new DisableQuackBehavior()
    );
  }
}
