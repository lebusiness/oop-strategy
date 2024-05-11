import { WingsFlyBehavior } from "../behaviorClasses/fly";
import { RarelyQuackBehavior } from "../behaviorClasses/quack";
import { Duck } from "../superclass/Duck";

export class SaxonDuck extends Duck {
  constructor() {
    super("Саксонская утка", new WingsFlyBehavior(), new RarelyQuackBehavior());
  }
}
