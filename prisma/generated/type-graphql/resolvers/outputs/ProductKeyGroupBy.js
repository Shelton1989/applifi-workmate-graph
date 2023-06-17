"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCountAggregate_1 = require("../outputs/ProductKeyCountAggregate");
const ProductKeyMaxAggregate_1 = require("../outputs/ProductKeyMaxAggregate");
const ProductKeyMinAggregate_1 = require("../outputs/ProductKeyMinAggregate");
let ProductKeyGroupBy = class ProductKeyGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyGroupBy.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyGroupBy.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyGroupBy.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCountAggregate_1.ProductKeyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCountAggregate_1.ProductKeyCountAggregate)
], ProductKeyGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMinAggregate_1.ProductKeyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMinAggregate_1.ProductKeyMinAggregate)
], ProductKeyGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyMaxAggregate_1.ProductKeyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyMaxAggregate_1.ProductKeyMaxAggregate)
], ProductKeyGroupBy.prototype, "_max", void 0);
ProductKeyGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductKeyGroupBy", {
        isAbstract: true
    })
], ProductKeyGroupBy);
exports.ProductKeyGroupBy = ProductKeyGroupBy;
