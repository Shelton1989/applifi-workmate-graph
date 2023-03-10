"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCountAggregate_1 = require("../outputs/OrderCountAggregate");
const OrderMaxAggregate_1 = require("../outputs/OrderMaxAggregate");
const OrderMinAggregate_1 = require("../outputs/OrderMinAggregate");
let AggregateOrder = class AggregateOrder {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCountAggregate_1.OrderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCountAggregate_1.OrderCountAggregate)
], AggregateOrder.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMinAggregate_1.OrderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMinAggregate_1.OrderMinAggregate)
], AggregateOrder.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMaxAggregate_1.OrderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMaxAggregate_1.OrderMaxAggregate)
], AggregateOrder.prototype, "_max", void 0);
AggregateOrder = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOrder", {
        isAbstract: true
    })
], AggregateOrder);
exports.AggregateOrder = AggregateOrder;
