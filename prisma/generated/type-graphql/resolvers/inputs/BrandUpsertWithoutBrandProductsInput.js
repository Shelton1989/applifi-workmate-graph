"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandUpsertWithoutBrandProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCreateWithoutBrandProductsInput_1 = require("../inputs/BrandCreateWithoutBrandProductsInput");
const BrandUpdateWithoutBrandProductsInput_1 = require("../inputs/BrandUpdateWithoutBrandProductsInput");
let BrandUpsertWithoutBrandProductsInput = class BrandUpsertWithoutBrandProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandUpdateWithoutBrandProductsInput_1.BrandUpdateWithoutBrandProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandUpdateWithoutBrandProductsInput_1.BrandUpdateWithoutBrandProductsInput)
], BrandUpsertWithoutBrandProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandCreateWithoutBrandProductsInput_1.BrandCreateWithoutBrandProductsInput)
], BrandUpsertWithoutBrandProductsInput.prototype, "create", void 0);
BrandUpsertWithoutBrandProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandUpsertWithoutBrandProductsInput", {
        isAbstract: true
    })
], BrandUpsertWithoutBrandProductsInput);
exports.BrandUpsertWithoutBrandProductsInput = BrandUpsertWithoutBrandProductsInput;
