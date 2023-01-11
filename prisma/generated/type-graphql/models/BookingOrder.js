"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BOOKING_ORDER_STATUS_1 = require("../enums/BOOKING_ORDER_STATUS");
const BookingOrderCount_1 = require("../resolvers/outputs/BookingOrderCount");
let BookingOrder = class BookingOrder {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrder.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrder.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrder.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCount_1.BookingOrderCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCount_1.BookingOrderCount)
], BookingOrder.prototype, "_count", void 0);
BookingOrder = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrder", {
        isAbstract: true
    })
], BookingOrder);
exports.BookingOrder = BookingOrder;
