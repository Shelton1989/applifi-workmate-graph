"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateManyBillingInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateManyBillingInput_1 = require("../inputs/ProductKeyCreateManyBillingInput");
let ProductKeyCreateManyBillingInputEnvelope = class ProductKeyCreateManyBillingInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateManyBillingInput_1.ProductKeyCreateManyBillingInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyCreateManyBillingInputEnvelope.prototype, "data", void 0);
ProductKeyCreateManyBillingInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateManyBillingInputEnvelope", {
        isAbstract: true
    })
], ProductKeyCreateManyBillingInputEnvelope);
exports.ProductKeyCreateManyBillingInputEnvelope = ProductKeyCreateManyBillingInputEnvelope;
