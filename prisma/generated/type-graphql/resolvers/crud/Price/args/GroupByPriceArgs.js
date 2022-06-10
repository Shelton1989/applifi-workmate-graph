"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceOrderByWithAggregationInput_1 = require("../../../inputs/PriceOrderByWithAggregationInput");
const PriceScalarWhereWithAggregatesInput_1 = require("../../../inputs/PriceScalarWhereWithAggregatesInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceScalarFieldEnum_1 = require("../../../../enums/PriceScalarFieldEnum");
let GroupByPriceArgs = class GroupByPriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], GroupByPriceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceOrderByWithAggregationInput_1.PriceOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPriceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceScalarFieldEnum_1.PriceScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPriceArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceScalarWhereWithAggregatesInput_1.PriceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceScalarWhereWithAggregatesInput_1.PriceScalarWhereWithAggregatesInput)
], GroupByPriceArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPriceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPriceArgs.prototype, "skip", void 0);
GroupByPriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPriceArgs);
exports.GroupByPriceArgs = GroupByPriceArgs;
