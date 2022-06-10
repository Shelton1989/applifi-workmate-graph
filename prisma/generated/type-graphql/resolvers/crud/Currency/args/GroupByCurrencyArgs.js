"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyOrderByWithAggregationInput_1 = require("../../../inputs/CurrencyOrderByWithAggregationInput");
const CurrencyScalarWhereWithAggregatesInput_1 = require("../../../inputs/CurrencyScalarWhereWithAggregatesInput");
const CurrencyWhereInput_1 = require("../../../inputs/CurrencyWhereInput");
const CurrencyScalarFieldEnum_1 = require("../../../../enums/CurrencyScalarFieldEnum");
let GroupByCurrencyArgs = class GroupByCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], GroupByCurrencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyOrderByWithAggregationInput_1.CurrencyOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrencyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyScalarFieldEnum_1.CurrencyScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrencyArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyScalarWhereWithAggregatesInput_1.CurrencyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyScalarWhereWithAggregatesInput_1.CurrencyScalarWhereWithAggregatesInput)
], GroupByCurrencyArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrencyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrencyArgs.prototype, "skip", void 0);
GroupByCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCurrencyArgs);
exports.GroupByCurrencyArgs = GroupByCurrencyArgs;
