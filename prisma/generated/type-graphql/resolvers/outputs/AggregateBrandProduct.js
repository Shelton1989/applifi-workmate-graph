"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandProduct = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCountAggregate_1 = require("../outputs/BrandProductCountAggregate");
const BrandProductMaxAggregate_1 = require("../outputs/BrandProductMaxAggregate");
const BrandProductMinAggregate_1 = require("../outputs/BrandProductMinAggregate");
let AggregateBrandProduct = class AggregateBrandProduct {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCountAggregate_1.BrandProductCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCountAggregate_1.BrandProductCountAggregate)
], AggregateBrandProduct.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMinAggregate_1.BrandProductMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMinAggregate_1.BrandProductMinAggregate)
], AggregateBrandProduct.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMaxAggregate_1.BrandProductMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMaxAggregate_1.BrandProductMaxAggregate)
], AggregateBrandProduct.prototype, "_max", void 0);
AggregateBrandProduct = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBrandProduct", {
        isAbstract: true
    })
], AggregateBrandProduct);
exports.AggregateBrandProduct = AggregateBrandProduct;
