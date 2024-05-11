"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaxonDuck = void 0;
var fly_1 = require("../behaviorClasses/fly");
var quack_1 = require("../behaviorClasses/quack");
var Duck_1 = require("../superclass/Duck");
var SaxonDuck = /** @class */ (function (_super) {
    __extends(SaxonDuck, _super);
    function SaxonDuck() {
        return _super.call(this, "Саксонская утка", new fly_1.WingsFlyBehavior(), new quack_1.RarelyQuackBehavior()) || this;
    }
    return SaxonDuck;
}(Duck_1.Duck));
exports.SaxonDuck = SaxonDuck;
