"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCreateWithoutBrandProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const STATUS_1 = require("../../enums/STATUS");
let BrandCreateWithoutBrandProductsInput = class BrandCreateWithoutBrandProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateWithoutBrandProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateWithoutBrandProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateWithoutBrandProductsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateWithoutBrandProductsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandCreateWithoutBrandProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandCreateWithoutBrandProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BrandCreateWithoutBrandProductsInput.prototype, "updatedAt", void 0);
BrandCreateWithoutBrandProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandCreateWithoutBrandProductsInput", {
        isAbstract: true
    })
], BrandCreateWithoutBrandProductsInput);
exports.BrandCreateWithoutBrandProductsInput = BrandCreateWithoutBrandProductsInput;
