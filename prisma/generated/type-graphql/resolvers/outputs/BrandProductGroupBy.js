"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCountAggregate_1 = require("../outputs/BrandProductCountAggregate");
const BrandProductMaxAggregate_1 = require("../outputs/BrandProductMaxAggregate");
const BrandProductMinAggregate_1 = require("../outputs/BrandProductMinAggregate");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductGroupBy = class BrandProductGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductGroupBy.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "brandId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCountAggregate_1.BrandProductCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCountAggregate_1.BrandProductCountAggregate)
], BrandProductGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMinAggregate_1.BrandProductMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMinAggregate_1.BrandProductMinAggregate)
], BrandProductGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMaxAggregate_1.BrandProductMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMaxAggregate_1.BrandProductMaxAggregate)
], BrandProductGroupBy.prototype, "_max", void 0);
BrandProductGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandProductGroupBy", {
        isAbstract: true
    })
], BrandProductGroupBy);
exports.BrandProductGroupBy = BrandProductGroupBy;
