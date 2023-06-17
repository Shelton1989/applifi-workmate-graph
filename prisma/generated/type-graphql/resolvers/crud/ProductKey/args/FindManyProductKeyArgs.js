"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyOrderByWithRelationInput_1 = require("../../../inputs/ProductKeyOrderByWithRelationInput");
const ProductKeyWhereInput_1 = require("../../../inputs/ProductKeyWhereInput");
const ProductKeyWhereUniqueInput_1 = require("../../../inputs/ProductKeyWhereUniqueInput");
const ProductKeyScalarFieldEnum_1 = require("../../../../enums/ProductKeyScalarFieldEnum");
let FindManyProductKeyArgs = class FindManyProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], FindManyProductKeyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyOrderByWithRelationInput_1.ProductKeyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProductKeyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereUniqueInput_1.ProductKeyWhereUniqueInput)
], FindManyProductKeyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProductKeyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProductKeyArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyScalarFieldEnum_1.ProductKeyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProductKeyArgs.prototype, "distinct", void 0);
FindManyProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProductKeyArgs);
exports.FindManyProductKeyArgs = FindManyProductKeyArgs;
