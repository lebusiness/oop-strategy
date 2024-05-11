"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableFlyBehavior = void 0;
var DisableFlyBehavior = /** @class */ (function () {
    function DisableFlyBehavior() {
    }
    DisableFlyBehavior.prototype.fly = function () {
        console.log("Я не умею летать");
    };
    return DisableFlyBehavior;
}());
exports.DisableFlyBehavior = DisableFlyBehavior;
