"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCountAggregate_1 = require("../outputs/OrderLineItemCountAggregate");
const OrderLineItemMaxAggregate_1 = require("../outputs/OrderLineItemMaxAggregate");
const OrderLineItemMinAggregate_1 = require("../outputs/OrderLineItemMinAggregate");
let OrderLineItemGroupBy = class OrderLineItemGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemGroupBy.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCountAggregate_1.OrderLineItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCountAggregate_1.OrderLineItemCountAggregate)
], OrderLineItemGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMinAggregate_1.OrderLineItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMinAggregate_1.OrderLineItemMinAggregate)
], OrderLineItemGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMaxAggregate_1.OrderLineItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMaxAggregate_1.OrderLineItemMaxAggregate)
], OrderLineItemGroupBy.prototype, "_max", void 0);
OrderLineItemGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderLineItemGroupBy", {
        isAbstract: true
    })
], OrderLineItemGroupBy);
exports.OrderLineItemGroupBy = OrderLineItemGroupBy;
