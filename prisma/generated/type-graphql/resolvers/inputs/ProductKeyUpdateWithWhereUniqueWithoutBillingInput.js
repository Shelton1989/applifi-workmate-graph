"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateWithWhereUniqueWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyUpdateWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyUpdateWithWhereUniqueWithoutBillingInput = class ProductKeyUpdateWithWhereUniqueWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], ProductKeyUpdateWithWhereUniqueWithoutBillingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput)
], ProductKeyUpdateWithWhereUniqueWithoutBillingInput.prototype, "data", void 0);
ProductKeyUpdateWithWhereUniqueWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpdateWithWhereUniqueWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpdateWithWhereUniqueWithoutBillingInput);
exports.ProductKeyUpdateWithWhereUniqueWithoutBillingInput = ProductKeyUpdateWithWhereUniqueWithoutBillingInput;
