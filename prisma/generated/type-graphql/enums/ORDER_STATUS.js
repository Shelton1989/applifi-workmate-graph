"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["OPEN"] = "OPEN";
    ORDER_STATUS["ORDERED"] = "ORDERED";
    ORDER_STATUS["ORDERED_PENDING_PAYMENT"] = "ORDERED_PENDING_PAYMENT";
    ORDER_STATUS["STARTED"] = "STARTED";
    ORDER_STATUS["IN_PROGRESS"] = "IN_PROGRESS";
    ORDER_STATUS["CUSTOMISED"] = "CUSTOMISED";
    ORDER_STATUS["READY_FOR_COLLECTION"] = "READY_FOR_COLLECTION";
    ORDER_STATUS["READY_FOR_DELIVERY"] = "READY_FOR_DELIVERY";
    ORDER_STATUS["SHIPPED"] = "SHIPPED";
    ORDER_STATUS["IN_DELIVERY"] = "IN_DELIVERY";
    ORDER_STATUS["DELIVERED"] = "DELIVERED";
    ORDER_STATUS["COMPLETE"] = "COMPLETE";
})(ORDER_STATUS = exports.ORDER_STATUS || (exports.ORDER_STATUS = {}));
TypeGraphQL.registerEnumType(ORDER_STATUS, {
    name: "ORDER_STATUS",
    description: undefined,
});
