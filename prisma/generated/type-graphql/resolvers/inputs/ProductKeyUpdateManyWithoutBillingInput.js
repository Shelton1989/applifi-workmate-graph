"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateManyWithoutBillingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyCreateManyBillingInputEnvelope_1 = require("../inputs/ProductKeyCreateManyBillingInputEnvelope");
const ProductKeyCreateOrConnectWithoutBillingInput_1 = require("../inputs/ProductKeyCreateOrConnectWithoutBillingInput");
const ProductKeyCreateWithoutBillingInput_1 = require("../inputs/ProductKeyCreateWithoutBillingInput");
const ProductKeyScalarWhereInput_1 = require("../inputs/ProductKeyScalarWhereInput");
const ProductKeyUpdateManyWithWhereWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateManyWithWhereWithoutBillingInput");
const ProductKeyUpdateWithWhereUniqueWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateWithWhereUniqueWithoutBillingInput");
const ProductKeyUpsertWithWhereUniqueWithoutBillingInput_1 = require("../inputs/ProductKeyUpsertWithWhereUniqueWithoutBillingInput");
const ProductKeyWhereUniqueInput_1 = require("../inputs/ProductKeyWhereUniqueInput");
let ProductKeyUpdateManyWithoutBillingInput = class ProductKeyUpdateManyWithoutBillingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateWithoutBillingInput_1.ProductKeyCreateWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyCreateOrConnectWithoutBillingInput_1.ProductKeyCreateOrConnectWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyUpsertWithWhereUniqueWithoutBillingInput_1.ProductKeyUpsertWithWhereUniqueWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyCreateManyBillingInputEnvelope_1.ProductKeyCreateManyBillingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyCreateManyBillingInputEnvelope_1.ProductKeyCreateManyBillingInputEnvelope)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyUpdateWithWhereUniqueWithoutBillingInput_1.ProductKeyUpdateWithWhereUniqueWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyUpdateManyWithWhereWithoutBillingInput_1.ProductKeyUpdateManyWithWhereWithoutBillingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyScalarWhereInput_1.ProductKeyScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyUpdateManyWithoutBillingInput.prototype, "deleteMany", void 0);
ProductKeyUpdateManyWithoutBillingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpdateManyWithoutBillingInput", {
        isAbstract: true
    })
], ProductKeyUpdateManyWithoutBillingInput);
exports.ProductKeyUpdateManyWithoutBillingInput = ProductKeyUpdateManyWithoutBillingInput;
