"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemAvgAggregate = class BookingOrderLineItemAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderLineItemAvgAggregate.prototype, "selectedQuantity", void 0);
BookingOrderLineItemAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderLineItemAvgAggregate", {
        isAbstract: true
    })
], BookingOrderLineItemAvgAggregate);
exports.BookingOrderLineItemAvgAggregate = BookingOrderLineItemAvgAggregate;
