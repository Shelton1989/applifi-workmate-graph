"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateNestedOneWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateOrConnectWithoutBillingInput_1 = require("../inputs/ProductKeyCreateOrConnectWithoutBillingInput");
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyCreateNestedOneWithoutBillingInput = class ProductKeyCreateNestedOneWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput)
], ProductKeyCreateNestedOneWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput)
], ProductKeyCreateNestedOneWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], ProductKeyCreateNestedOneWithoutBillingInput.prototype, "connect", void 0);
ProductKeyCreateNestedOneWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateNestedOneWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyCreateNestedOneWithoutBillingInput);
exports.ProductKeyCreateNestedOneWithoutBillingInput = ProductKeyCreateNestedOneWithoutBillingInput;
