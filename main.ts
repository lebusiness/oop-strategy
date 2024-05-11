import { RadioControlFlyBehavior } from "./behaviorClasses/fly";
import { SlowlyQuackBehavior } from "./behaviorClasses/quack";
import {
  AlbinosDuck,
  DecoyDuck,
  RedHeadDuck,
  RubberDuck,
  SaxonDuck,
} from "./childClasses";
import { Duck } from "./superclass/Duck";

const rubberDuck = new RubberDuck();
const decoyDuck = new DecoyDuck();
const redHeadDuck = new RedHeadDuck();
const saxonDuck = new SaxonDuck();
const albinosDuck = new AlbinosDuck();

const ducks: Duck[] = [
  rubberDuck,
  decoyDuck,
  redHeadDuck,
  saxonDuck,
  albinosDuck,
];

for (const duck of ducks) {
  duck.showName();
  duck.performFly();
  duck.performQuack();
}

decoyDuck.showName();
decoyDuck.setFlyBehavior(new RadioControlFlyBehavior());
decoyDuck.performFly();

redHeadDuck.showName();
redHeadDuck.setQuackBehavior(new SlowlyQuackBehavior());
redHeadDuck.performQuack();
