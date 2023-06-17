"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingProductKeysArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyOrderByWithRelationInput_1 = require("../../../inputs/ProductKeyOrderByWithRelationInput");
const ProductKeyWhereInput_1 = require("../../../inputs/ProductKeyWhereInput");
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
const ProductKeyScalarFieldEnum_1 = require("../../../../enums/ProductKeyScalarFieldEnum");
let BillingProductKeysArgs = class BillingProductKeysArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], BillingProductKeysArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyOrderByWithRelationInput_1.ProductKeyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillingProductKeysArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], BillingProductKeysArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillingProductKeysArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillingProductKeysArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyScalarFieldEnum_1.ProductKeyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillingProductKeysArgs.prototype, "distinct", void 0);
BillingProductKeysArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], BillingProductKeysArgs);
exports.BillingProductKeysArgs = BillingProductKeysArgs;
