"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableQuackBehavior = void 0;
var DisableQuackBehavior = /** @class */ (function () {
    function DisableQuackBehavior() {
    }
    DisableQuackBehavior.prototype.quack = function () {
        console.log("Я не умею крякать");
    };
    return DisableQuackBehavior;
}());
exports.DisableQuackBehavior = DisableQuackBehavior;
