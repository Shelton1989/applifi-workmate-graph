"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandBrandProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductOrderByWithRelationInput_1 = require("../../../inputs/BrandProductOrderByWithRelationInput");
const BrandProductWhereInput_1 = require("../../../inputs/BrandProductWhereInput");
const BrandProductWhereUniqueInput_1 = require("../../../inputs/BrandProductWhereUniqueInput");
const BrandProductScalarFieldEnum_1 = require("../../../../enums/BrandProductScalarFieldEnum");
let BrandBrandProductsArgs = class BrandBrandProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], BrandBrandProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductOrderByWithRelationInput_1.BrandProductOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandBrandProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereUniqueInput_1.BrandProductWhereUniqueInput)
], BrandBrandProductsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BrandBrandProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BrandBrandProductsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarFieldEnum_1.BrandProductScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandBrandProductsArgs.prototype, "distinct", void 0);
BrandBrandProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], BrandBrandProductsArgs);
exports.BrandBrandProductsArgs = BrandBrandProductsArgs;