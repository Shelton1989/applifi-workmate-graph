"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpsertWithWhereUniqueWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyUpdateWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyUpsertWithWhereUniqueWithoutBillingInput = class ProductKeyUpsertWithWhereUniqueWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], ProductKeyUpsertWithWhereUniqueWithoutBillingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput)
], ProductKeyUpsertWithWhereUniqueWithoutBillingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput)
], ProductKeyUpsertWithWhereUniqueWithoutBillingInput.prototype, "create", void 0);
ProductKeyUpsertWithWhereUniqueWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpsertWithWhereUniqueWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpsertWithWhereUniqueWithoutBillingInput);
exports.ProductKeyUpsertWithWhereUniqueWithoutBillingInput = ProductKeyUpsertWithWhereUniqueWithoutBillingInput;
