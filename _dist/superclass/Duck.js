"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck(name, flyBehavior, quackBehavior) {
        this.name = name;
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    Duck.prototype.showName = function () {
        console.log(this.name);
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.setFlyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    };
    Duck.prototype.setQuackBehavior = function (quackBehavoir) {
        this.quackBehavior = quackBehavoir;
    };
    return Duck;
}());
exports.Duck = Duck;
