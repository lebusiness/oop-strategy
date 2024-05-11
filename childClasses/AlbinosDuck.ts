import { WingsFlyBehavior } from "../behaviorClasses/fly";
import { LoudlyQuackBehavior } from "../behaviorClasses/quack";
import { Duck } from "../superclass/Duck";

export class AlbinosDuck extends Duck {
  constructor() {
    super("Альбинос утка", new WingsFlyBehavior(), new LoudlyQuackBehavior());
  }
}
