"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeOrderByWithAggregationInput_1 = require("../../../inputs/SizeOrderByWithAggregationInput");
const SizeScalarWhereWithAggregatesInput_1 = require("../../../inputs/SizeScalarWhereWithAggregatesInput");
const SizeWhereInput_1 = require("../../../inputs/SizeWhereInput");
const SizeScalarFieldEnum_1 = require("../../../../enums/SizeScalarFieldEnum");
let GroupBySizeArgs = class GroupBySizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereInput_1.SizeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeWhereInput_1.SizeWhereInput)
], GroupBySizeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeOrderByWithAggregationInput_1.SizeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySizeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeScalarFieldEnum_1.SizeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySizeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeScalarWhereWithAggregatesInput_1.SizeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeScalarWhereWithAggregatesInput_1.SizeScalarWhereWithAggregatesInput)
], GroupBySizeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySizeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySizeArgs.prototype, "skip", void 0);
GroupBySizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySizeArgs);
exports.GroupBySizeArgs = GroupBySizeArgs;
