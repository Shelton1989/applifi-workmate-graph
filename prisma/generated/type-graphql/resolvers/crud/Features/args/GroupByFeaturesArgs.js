"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesOrderByWithAggregationInput_1 = require("../../../inputs/FeaturesOrderByWithAggregationInput");
const FeaturesScalarWhereWithAggregatesInput_1 = require("../../../inputs/FeaturesScalarWhereWithAggregatesInput");
const FeaturesWhereInput_1 = require("../../../inputs/FeaturesWhereInput");
const FeaturesScalarFieldEnum_1 = require("../../../../enums/FeaturesScalarFieldEnum");
let GroupByFeaturesArgs = class GroupByFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], GroupByFeaturesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesOrderByWithAggregationInput_1.FeaturesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFeaturesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesScalarFieldEnum_1.FeaturesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFeaturesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesScalarWhereWithAggregatesInput_1.FeaturesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesScalarWhereWithAggregatesInput_1.FeaturesScalarWhereWithAggregatesInput)
], GroupByFeaturesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFeaturesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFeaturesArgs.prototype, "skip", void 0);
GroupByFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFeaturesArgs);
exports.GroupByFeaturesArgs = GroupByFeaturesArgs;
