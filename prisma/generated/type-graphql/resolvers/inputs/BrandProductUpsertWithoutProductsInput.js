"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductUpsertWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCreateWithoutProductsInput_1 = require("../inputs/BrandProductCreateWithoutProductsInput");
const BrandProductUpdateWithoutProductsInput_1 = require("../inputs/BrandProductUpdateWithoutProductsInput");
let BrandProductUpsertWithoutProductsInput = class BrandProductUpsertWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateWithoutProductsInput_1.BrandProductUpdateWithoutProductsInput)
], BrandProductUpsertWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateWithoutProductsInput_1.BrandProductCreateWithoutProductsInput)
], BrandProductUpsertWithoutProductsInput.prototype, "create", void 0);
BrandProductUpsertWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductUpsertWithoutProductsInput", {
        isAbstract: true
    })
], BrandProductUpsertWithoutProductsInput);
exports.BrandProductUpsertWithoutProductsInput = BrandProductUpsertWithoutProductsInput;
