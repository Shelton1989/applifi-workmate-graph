"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodAvgAggregate_1 = require("../outputs/ShippingMethodAvgAggregate");
const ShippingMethodCountAggregate_1 = require("../outputs/ShippingMethodCountAggregate");
const ShippingMethodMaxAggregate_1 = require("../outputs/ShippingMethodMaxAggregate");
const ShippingMethodMinAggregate_1 = require("../outputs/ShippingMethodMinAggregate");
const ShippingMethodSumAggregate_1 = require("../outputs/ShippingMethodSumAggregate");
let ShippingMethodGroupBy = class ShippingMethodGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShippingMethodGroupBy.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodGroupBy.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ShippingMethodGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCountAggregate_1.ShippingMethodCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCountAggregate_1.ShippingMethodCountAggregate)
], ShippingMethodGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodAvgAggregate_1.ShippingMethodAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodAvgAggregate_1.ShippingMethodAvgAggregate)
], ShippingMethodGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodSumAggregate_1.ShippingMethodSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodSumAggregate_1.ShippingMethodSumAggregate)
], ShippingMethodGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMinAggregate_1.ShippingMethodMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMinAggregate_1.ShippingMethodMinAggregate)
], ShippingMethodGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMaxAggregate_1.ShippingMethodMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMaxAggregate_1.ShippingMethodMaxAggregate)
], ShippingMethodGroupBy.prototype, "_max", void 0);
ShippingMethodGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShippingMethodGroupBy", {
        isAbstract: true
    })
], ShippingMethodGroupBy);
exports.ShippingMethodGroupBy = ShippingMethodGroupBy;
