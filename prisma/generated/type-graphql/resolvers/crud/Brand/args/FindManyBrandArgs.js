"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandOrderByWithRelationInput_1 = require("../../../inputs/BrandOrderByWithRelationInput");
const BrandWhereInput_1 = require("../../../inputs/BrandWhereInput");
const BrandWhereUniqueInput_1 = require("../../../inputs/BrandWhereUniqueInput");
const BrandScalarFieldEnum_1 = require("../../../../enums/BrandScalarFieldEnum");
let FindManyBrandArgs = class FindManyBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], FindManyBrandArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandOrderByWithRelationInput_1.BrandOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBrandArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereUniqueInput_1.BrandWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereUniqueInput_1.BrandWhereUniqueInput)
], FindManyBrandArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBrandArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBrandArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandScalarFieldEnum_1.BrandScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBrandArgs.prototype, "distinct", void 0);
FindManyBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyBrandArgs);
exports.FindManyBrandArgs = FindManyBrandArgs;
