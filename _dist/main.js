"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fly_1 = require("./behaviorClasses/fly");
var quack_1 = require("./behaviorClasses/quack");
var childClasses_1 = require("./childClasses");
var rubberDuck = new childClasses_1.RubberDuck();
var decoyDuck = new childClasses_1.DecoyDuck();
var redHeadDuck = new childClasses_1.RedHeadDuck();
var saxonDuck = new childClasses_1.SaxonDuck();
var albinosDuck = new childClasses_1.AlbinosDuck();
var ducks = [
    rubberDuck,
    decoyDuck,
    redHeadDuck,
    saxonDuck,
    albinosDuck,
];
for (var _i = 0, ducks_1 = ducks; _i < ducks_1.length; _i++) {
    var duck = ducks_1[_i];
    duck.showName();
    duck.performFly();
    duck.performQuack();
}
decoyDuck.showName();
decoyDuck.setFlyBehavior(new fly_1.RadioControlFlyBehavior());
decoyDuck.performFly();
redHeadDuck.showName();
redHeadDuck.setQuackBehavior(new quack_1.SlowlyQuackBehavior());
redHeadDuck.performQuack();
