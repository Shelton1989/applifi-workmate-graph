"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBrandArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandOrderByWithAggregationInput_1 = require("../../../inputs/BrandOrderByWithAggregationInput");
const BrandScalarWhereWithAggregatesInput_1 = require("../../../inputs/BrandScalarWhereWithAggregatesInput");
const BrandWhereInput_1 = require("../../../inputs/BrandWhereInput");
const BrandScalarFieldEnum_1 = require("../../../../enums/BrandScalarFieldEnum");
let GroupByBrandArgs = class GroupByBrandArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandWhereInput_1.BrandWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandWhereInput_1.BrandWhereInput)
], GroupByBrandArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandOrderByWithAggregationInput_1.BrandOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandScalarFieldEnum_1.BrandScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandScalarWhereWithAggregatesInput_1.BrandScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandScalarWhereWithAggregatesInput_1.BrandScalarWhereWithAggregatesInput)
], GroupByBrandArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandArgs.prototype, "skip", void 0);
GroupByBrandArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBrandArgs);
exports.GroupByBrandArgs = GroupByBrandArgs;
