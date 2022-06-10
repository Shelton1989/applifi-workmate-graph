"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrand = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCountAggregate_1 = require("../outputs/BrandCountAggregate");
const BrandMaxAggregate_1 = require("../outputs/BrandMaxAggregate");
const BrandMinAggregate_1 = require("../outputs/BrandMinAggregate");
let AggregateBrand = class AggregateBrand {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCountAggregate_1.BrandCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCountAggregate_1.BrandCountAggregate)
], AggregateBrand.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMinAggregate_1.BrandMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMinAggregate_1.BrandMinAggregate)
], AggregateBrand.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMaxAggregate_1.BrandMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMaxAggregate_1.BrandMaxAggregate)
], AggregateBrand.prototype, "_max", void 0);
AggregateBrand = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBrand", {
        isAbstract: true
    })
], AggregateBrand);
exports.AggregateBrand = AggregateBrand;
