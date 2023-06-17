"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateNestedManyWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateManyBillingInputEnvelope_1 = require("../inputs/ProductKeyCreateManyBillingInputEnvelope");
const ProductKeyCreateOrConnectWithoutBillingInput_1 = require("../inputs/ProductKeyCreateOrConnectWithoutBillingInput");
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyCreateNestedManyWithoutBillingInput = class ProductKeyCreateNestedManyWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyCreateNestedManyWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyCreateNestedManyWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateManyBillingInputEnvelope_1.ProductKeyCreateManyBillingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateManyBillingInputEnvelope_1.ProductKeyCreateManyBillingInputEnvelope)
], ProductKeyCreateNestedManyWithoutBillingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyCreateNestedManyWithoutBillingInput.prototype, "connect", void 0);
ProductKeyCreateNestedManyWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateNestedManyWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyCreateNestedManyWithoutBillingInput);
exports.ProductKeyCreateNestedManyWithoutBillingInput = ProductKeyCreateNestedManyWithoutBillingInput;
