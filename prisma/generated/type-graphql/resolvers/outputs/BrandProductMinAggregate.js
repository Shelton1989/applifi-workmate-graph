"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductMinAggregate = class BrandProductMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductMinAggregate.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "brandId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductMinAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductMinAggregate.prototype, "updatedAt", void 0);
BrandProductMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandProductMinAggregate", {
        isAbstract: true
    })
], BrandProductMinAggregate);
exports.BrandProductMinAggregate = BrandProductMinAggregate;
