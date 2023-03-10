"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["OPEN"] = "OPEN";
    ORDER_STATUS["ORDERED"] = "ORDERED";
    ORDER_STATUS["IN_PREPARATION"] = "IN_PREPARATION";
    ORDER_STATUS["READY_FOR_COLLECTION"] = "READY_FOR_COLLECTION";
    ORDER_STATUS["IN_TRANSIT"] = "IN_TRANSIT";
    ORDER_STATUS["ARRIVED"] = "ARRIVED";
    ORDER_STATUS["COMPLETE"] = "COMPLETE";
    ORDER_STATUS["CANCELLED"] = "CANCELLED";
})(ORDER_STATUS = exports.ORDER_STATUS || (exports.ORDER_STATUS = {}));
TypeGraphQL.registerEnumType(ORDER_STATUS, {
    name: "ORDER_STATUS",
    description: undefined,
});
