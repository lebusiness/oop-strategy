import { TFlyBehavior } from "../behaviorClasses/fly";
import { TQuackBehavior } from "../behaviorClasses/quack";

export class Duck {
  constructor(
    private name: string,
    private flyBehavior: TFlyBehavior,
    private quackBehavior: TQuackBehavior
  ) {}

  public showName() {
    console.log(this.name);
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public setFlyBehavior(flyBehavior: TFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavoir: TQuackBehavior) {
    this.quackBehavior = quackBehavoir;
  }
}
