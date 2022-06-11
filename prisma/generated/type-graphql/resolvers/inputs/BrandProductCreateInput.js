"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateNestedOneWithoutBrandProductsInput_1 = require("../inputs/BrandCreateNestedOneWithoutBrandProductsInput");
const ProductCreateNestedManyWithoutBaseProductInput_1 = require("../inputs/ProductCreateNestedManyWithoutBaseProductInput");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductCreateInput = class BrandProductCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateNestedOneWithoutBrandProductsInput_1.BrandCreateNestedOneWithoutBrandProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateNestedOneWithoutBrandProductsInput_1.BrandCreateNestedOneWithoutBrandProductsInput)
], BrandProductCreateInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutBaseProductInput_1.ProductCreateNestedManyWithoutBaseProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutBaseProductInput_1.ProductCreateNestedManyWithoutBaseProductInput)
], BrandProductCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateInput.prototype, "updatedAt", void 0);
BrandProductCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateInput", {
        isAbstract: true
    })
], BrandProductCreateInput);
exports.BrandProductCreateInput = BrandProductCreateInput;
