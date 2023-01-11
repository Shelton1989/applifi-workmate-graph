"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemMaxAggregate = class BookingOrderLineItemMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxAggregate.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxAggregate.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemMaxAggregate.prototype, "updatedAt", void 0);
BookingOrderLineItemMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderLineItemMaxAggregate", {
        isAbstract: true
    })
], BookingOrderLineItemMaxAggregate);
exports.BookingOrderLineItemMaxAggregate = BookingOrderLineItemMaxAggregate;
