"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let BookingOrderMaxAggregate = class BookingOrderMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderMaxAggregate.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderMaxAggregate.prototype, "updatedAt", void 0);
BookingOrderMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderMaxAggregate", {
        isAbstract: true
    })
], BookingOrderMaxAggregate);
exports.BookingOrderMaxAggregate = BookingOrderMaxAggregate;
