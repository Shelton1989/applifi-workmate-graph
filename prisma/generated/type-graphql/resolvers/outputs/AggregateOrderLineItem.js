"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderLineItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCountAggregate_1 = require("../outputs/OrderLineItemCountAggregate");
const OrderLineItemMaxAggregate_1 = require("../outputs/OrderLineItemMaxAggregate");
const OrderLineItemMinAggregate_1 = require("../outputs/OrderLineItemMinAggregate");
let AggregateOrderLineItem = class AggregateOrderLineItem {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCountAggregate_1.OrderLineItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCountAggregate_1.OrderLineItemCountAggregate)
], AggregateOrderLineItem.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMinAggregate_1.OrderLineItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMinAggregate_1.OrderLineItemMinAggregate)
], AggregateOrderLineItem.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMaxAggregate_1.OrderLineItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMaxAggregate_1.OrderLineItemMaxAggregate)
], AggregateOrderLineItem.prototype, "_max", void 0);
AggregateOrderLineItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOrderLineItem", {
        isAbstract: true
    })
], AggregateOrderLineItem);
exports.AggregateOrderLineItem = AggregateOrderLineItem;
