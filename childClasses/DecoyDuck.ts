import { DisableFlyBehavior } from "../behaviorClasses/fly";
import { LoudlyQuackBehavior } from "../behaviorClasses/quack";
import { Duck } from "../superclass/Duck";

export class DecoyDuck extends Duck {
  constructor() {
    super("Утка-приманка", new DisableFlyBehavior(), new LoudlyQuackBehavior());
  }
}
