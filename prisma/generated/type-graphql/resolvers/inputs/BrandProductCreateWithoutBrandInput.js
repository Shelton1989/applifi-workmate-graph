"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCreateWithoutBrandInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutBaseProductInput_1 = require("../inputs/ProductCreateNestedManyWithoutBaseProductInput");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
const STATUS_1 = require("../../enums/STATUS");
let BrandProductCreateWithoutBrandInput = class BrandProductCreateWithoutBrandInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutBrandInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductCreateWithoutBrandInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutBaseProductInput_1.ProductCreateNestedManyWithoutBaseProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutBaseProductInput_1.ProductCreateNestedManyWithoutBaseProductInput)
], BrandProductCreateWithoutBrandInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutBrandInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandProductCreateWithoutBrandInput.prototype, "updatedAt", void 0);
BrandProductCreateWithoutBrandInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductCreateWithoutBrandInput", {
        isAbstract: true
    })
], BrandProductCreateWithoutBrandInput);
exports.BrandProductCreateWithoutBrandInput = BrandProductCreateWithoutBrandInput;
