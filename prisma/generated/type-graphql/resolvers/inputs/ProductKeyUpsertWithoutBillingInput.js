"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpsertWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyUpdateWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateWithoutBillingInput");
let ProductKeyUpsertWithoutBillingInput = class ProductKeyUpsertWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput)
], ProductKeyUpsertWithoutBillingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput)
], ProductKeyUpsertWithoutBillingInput.prototype, "create", void 0);
ProductKeyUpsertWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpsertWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpsertWithoutBillingInput);
exports.ProductKeyUpsertWithoutBillingInput = ProductKeyUpsertWithoutBillingInput;
