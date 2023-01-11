"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOOKING_ORDER_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BOOKING_ORDER_STATUS;
(function (BOOKING_ORDER_STATUS) {
    BOOKING_ORDER_STATUS["OPEN"] = "OPEN";
    BOOKING_ORDER_STATUS["BOOKED"] = "BOOKED";
    BOOKING_ORDER_STATUS["BOOKED_PENDING_PAYMENT"] = "BOOKED_PENDING_PAYMENT";
    BOOKING_ORDER_STATUS["READY_FOR_CHECK_IN"] = "READY_FOR_CHECK_IN";
    BOOKING_ORDER_STATUS["CHECKED_IN"] = "CHECKED_IN";
    BOOKING_ORDER_STATUS["READY_FOR_CHECK_OUT"] = "READY_FOR_CHECK_OUT";
    BOOKING_ORDER_STATUS["COMPLETE"] = "COMPLETE";
    BOOKING_ORDER_STATUS["CANCELLED"] = "CANCELLED";
})(BOOKING_ORDER_STATUS = exports.BOOKING_ORDER_STATUS || (exports.BOOKING_ORDER_STATUS = {}));
TypeGraphQL.registerEnumType(BOOKING_ORDER_STATUS, {
    name: "BOOKING_ORDER_STATUS",
    description: undefined,
});
