"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBrandProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductOrderByWithAggregationInput_1 = require("../../../inputs/BrandProductOrderByWithAggregationInput");
const BrandProductScalarWhereWithAggregatesInput_1 = require("../../../inputs/BrandProductScalarWhereWithAggregatesInput");
const BrandProductWhereInput_1 = require("../../../inputs/BrandProductWhereInput");
const BrandProductScalarFieldEnum_1 = require("../../../../enums/BrandProductScalarFieldEnum");
let GroupByBrandProductArgs = class GroupByBrandProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductWhereInput_1.BrandProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductWhereInput_1.BrandProductWhereInput)
], GroupByBrandProductArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductOrderByWithAggregationInput_1.BrandProductOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandProductArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarFieldEnum_1.BrandProductScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandProductArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductScalarWhereWithAggregatesInput_1.BrandProductScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductScalarWhereWithAggregatesInput_1.BrandProductScalarWhereWithAggregatesInput)
], GroupByBrandProductArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandProductArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandProductArgs.prototype, "skip", void 0);
GroupByBrandProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBrandProductArgs);
exports.GroupByBrandProductArgs = GroupByBrandProductArgs;
