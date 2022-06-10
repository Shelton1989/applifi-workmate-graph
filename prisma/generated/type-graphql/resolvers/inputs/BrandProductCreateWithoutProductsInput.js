"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateNestedOneWithoutBrandProductsInput_1 = require("../inputs/BrandCreateNestedOneWithoutBrandProductsInput");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductCreateWithoutProductsInput = class BrandProductCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutProductsInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateNestedOneWithoutBrandProductsInput_1.BrandCreateNestedOneWithoutBrandProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateNestedOneWithoutBrandProductsInput_1.BrandCreateNestedOneWithoutBrandProductsInput)
], BrandProductCreateWithoutProductsInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutProductsInput.prototype, "updatedAt", void 0);
BrandProductCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductCreateWithoutProductsInput);
exports.BrandProductCreateWithoutProductsInput = BrandProductCreateWithoutProductsInput;
