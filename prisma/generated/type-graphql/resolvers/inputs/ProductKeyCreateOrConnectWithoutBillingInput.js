"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCreateOrConnectWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyCreateOrConnectWithoutBillingInput = class ProductKeyCreateOrConnectWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], ProductKeyCreateOrConnectWithoutBillingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput)
], ProductKeyCreateOrConnectWithoutBillingInput.prototype, "create", void 0);
ProductKeyCreateOrConnectWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyCreateOrConnectWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyCreateOrConnectWithoutBillingInput);
exports.ProductKeyCreateOrConnectWithoutBillingInput = ProductKeyCreateOrConnectWithoutBillingInput;
