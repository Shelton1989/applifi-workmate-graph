"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateManyBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductCreateManyBrandInput = class BrandProductCreateManyBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateManyBrandInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateManyBrandInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateManyBrandInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateManyBrandInput.prototype, "updatedAt", void 0);
BrandProductCreateManyBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateManyBrandInput", {
        isAbstract: true
    })
], BrandProductCreateManyBrandInput);
exports.BrandProductCreateManyBrandInput = BrandProductCreateManyBrandInput;
