"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingOrderByWithAggregationInput_1 = require("../../../inputs/BillingOrderByWithAggregationInput");
const BillingScalarWhereWithAggregatesInput_1 = require("../../../inputs/BillingScalarWhereWithAggregatesInput");
const BillingWhereInput_1 = require("../../../inputs/BillingWhereInput");
const BillingScalarFieldEnum_1 = require("../../../../enums/BillingScalarFieldEnum");
let GroupByBillingArgs = class GroupByBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], GroupByBillingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingOrderByWithAggregationInput_1.BillingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBillingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingScalarFieldEnum_1.BillingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBillingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingScalarWhereWithAggregatesInput_1.BillingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingScalarWhereWithAggregatesInput_1.BillingScalarWhereWithAggregatesInput)
], GroupByBillingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBillingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBillingArgs.prototype, "skip", void 0);
GroupByBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBillingArgs);
exports.GroupByBillingArgs = GroupByBillingArgs;
