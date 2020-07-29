var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('Chugga Chugga');
    };
    Vehicle.prototype.honk = function () {
        console.log('Beep Beep');
    };
    return Vehicle;
}());
var Carr = /** @class */ (function (_super) {
    __extends(Carr, _super);
    function Carr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Carr;
}(Vehicle));
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
var carr = new Carr();
carr.drive();
carr.honk();
