"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShippingMethod = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodAvgAggregate_1 = require("../outputs/ShippingMethodAvgAggregate");
const ShippingMethodCountAggregate_1 = require("../outputs/ShippingMethodCountAggregate");
const ShippingMethodMaxAggregate_1 = require("../outputs/ShippingMethodMaxAggregate");
const ShippingMethodMinAggregate_1 = require("../outputs/ShippingMethodMinAggregate");
const ShippingMethodSumAggregate_1 = require("../outputs/ShippingMethodSumAggregate");
let AggregateShippingMethod = class AggregateShippingMethod {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCountAggregate_1.ShippingMethodCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCountAggregate_1.ShippingMethodCountAggregate)
], AggregateShippingMethod.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodAvgAggregate_1.ShippingMethodAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodAvgAggregate_1.ShippingMethodAvgAggregate)
], AggregateShippingMethod.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodSumAggregate_1.ShippingMethodSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodSumAggregate_1.ShippingMethodSumAggregate)
], AggregateShippingMethod.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMinAggregate_1.ShippingMethodMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMinAggregate_1.ShippingMethodMinAggregate)
], AggregateShippingMethod.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMaxAggregate_1.ShippingMethodMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMaxAggregate_1.ShippingMethodMaxAggregate)
], AggregateShippingMethod.prototype, "_max", void 0);
AggregateShippingMethod = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShippingMethod", {
        isAbstract: true
    })
], AggregateShippingMethod);
exports.AggregateShippingMethod = AggregateShippingMethod;
