"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductKeyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyOrderByWithAggregationInput_1 = require("../../../inputs/ProductKeyOrderByWithAggregationInput");
const ProductKeyScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProductKeyScalarWhereWithAggregatesInput");
const ProductKeyWhereInput_1 = require("../../../inputs/ProductKeyWhereInput");
const ProductKeyScalarFieldEnum_1 = require("../../../../enums/ProductKeyScalarFieldEnum");
let GroupByProductKeyArgs = class GroupByProductKeyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], GroupByProductKeyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyOrderByWithAggregationInput_1.ProductKeyOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductKeyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyScalarFieldEnum_1.ProductKeyScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductKeyArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyScalarWhereWithAggregatesInput_1.ProductKeyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyScalarWhereWithAggregatesInput_1.ProductKeyScalarWhereWithAggregatesInput)
], GroupByProductKeyArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductKeyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductKeyArgs.prototype, "skip", void 0);
GroupByProductKeyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProductKeyArgs);
exports.GroupByProductKeyArgs = GroupByProductKeyArgs;
