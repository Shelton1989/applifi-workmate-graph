"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductKey = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCountAggregate_1 = require("../outputs/ProductKeyCountAggregate");
const ProductKeyMaxAggregate_1 = require("../outputs/ProductKeyMaxAggregate");
const ProductKeyMinAggregate_1 = require("../outputs/ProductKeyMinAggregate");
let AggregateProductKey = class AggregateProductKey {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCountAggregate_1.ProductKeyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCountAggregate_1.ProductKeyCountAggregate)
], AggregateProductKey.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMinAggregate_1.ProductKeyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMinAggregate_1.ProductKeyMinAggregate)
], AggregateProductKey.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMaxAggregate_1.ProductKeyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMaxAggregate_1.ProductKeyMaxAggregate)
], AggregateProductKey.prototype, "_max", void 0);
AggregateProductKey = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProductKey", {
        isAbstract: true
    })
], AggregateProductKey);
exports.AggregateProductKey = AggregateProductKey;
