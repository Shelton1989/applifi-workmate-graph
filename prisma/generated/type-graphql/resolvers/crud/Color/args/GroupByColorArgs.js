"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorOrderByWithAggregationInput_1 = require("../../../inputs/ColorOrderByWithAggregationInput");
const ColorScalarWhereWithAggregatesInput_1 = require("../../../inputs/ColorScalarWhereWithAggregatesInput");
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
const ColorScalarFieldEnum_1 = require("../../../../enums/ColorScalarFieldEnum");
let GroupByColorArgs = class GroupByColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], GroupByColorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorOrderByWithAggregationInput_1.ColorOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByColorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ColorScalarFieldEnum_1.ColorScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByColorArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorScalarWhereWithAggregatesInput_1.ColorScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorScalarWhereWithAggregatesInput_1.ColorScalarWhereWithAggregatesInput)
], GroupByColorArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByColorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByColorArgs.prototype, "skip", void 0);
GroupByColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByColorArgs);
exports.GroupByColorArgs = GroupByColorArgs;
