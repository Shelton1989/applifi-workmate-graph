"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemMinAggregate = class BookingOrderLineItemMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinAggregate.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinAggregate.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemMinAggregate.prototype, "updatedAt", void 0);
BookingOrderLineItemMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderLineItemMinAggregate", {
        isAbstract: true
    })
], BookingOrderLineItemMinAggregate);
exports.BookingOrderLineItemMinAggregate = BookingOrderLineItemMinAggregate;
