"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateOneWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateOrConnectWithoutBillingInput_1 = require("../inputs/ProductKeyCreateOrConnectWithoutBillingInput");
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyUpdateWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateWithoutBillingInput");
const ProductKeyUpsertWithoutBillingInput_1 = require("../inputs/ProductKeyUpsertWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyUpdateOneWithoutBillingInput = class ProductKeyUpdateOneWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpsertWithoutBillingInput_1.ProductKeyUpsertWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyUpsertWithoutBillingInput_1.ProductKeyUpsertWithoutBillingInput)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateWithoutBillingInput_1.ProductKeyUpdateWithoutBillingInput)
], ProductKeyUpdateOneWithoutBillingInput.prototype, "update", void 0);
ProductKeyUpdateOneWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpdateOneWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpdateOneWithoutBillingInput);
exports.ProductKeyUpdateOneWithoutBillingInput = ProductKeyUpdateOneWithoutBillingInput;
