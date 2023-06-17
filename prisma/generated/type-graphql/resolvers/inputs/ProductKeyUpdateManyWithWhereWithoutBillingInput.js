"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateManyWithWhereWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyScalarWhereInput_1 = require("../inputs/ProductKeyScalarWhereInput");
const ProductKeyUpdateManyMutationInput_1 = require("../inputs/ProductKeyUpdateManyMutationInput");
let ProductKeyUpdateManyWithWhereWithoutBillingInput = class ProductKeyUpdateManyWithWhereWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyScalarWhereInput_1.ProductKeyScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyScalarWhereInput_1.ProductKeyScalarWhereInput)
], ProductKeyUpdateManyWithWhereWithoutBillingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateManyMutationInput_1.ProductKeyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateManyMutationInput_1.ProductKeyUpdateManyMutationInput)
], ProductKeyUpdateManyWithWhereWithoutBillingInput.prototype, "data", void 0);
ProductKeyUpdateManyWithWhereWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpdateManyWithWhereWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpdateManyWithWhereWithoutBillingInput);
exports.ProductKeyUpdateManyWithWhereWithoutBillingInput = ProductKeyUpdateManyWithWhereWithoutBillingInput;
