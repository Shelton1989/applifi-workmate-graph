"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardOrderByWithAggregationInput_1 = require("../../../inputs/WardOrderByWithAggregationInput");
const WardScalarWhereWithAggregatesInput_1 = require("../../../inputs/WardScalarWhereWithAggregatesInput");
const WardWhereInput_1 = require("../../../inputs/WardWhereInput");
const WardScalarFieldEnum_1 = require("../../../../enums/WardScalarFieldEnum");
let GroupByWardArgs = class GroupByWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], GroupByWardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WardOrderByWithAggregationInput_1.WardOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WardScalarFieldEnum_1.WardScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWardArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardScalarWhereWithAggregatesInput_1.WardScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardScalarWhereWithAggregatesInput_1.WardScalarWhereWithAggregatesInput)
], GroupByWardArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWardArgs.prototype, "skip", void 0);
GroupByWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWardArgs);
exports.GroupByWardArgs = GroupByWardArgs;
