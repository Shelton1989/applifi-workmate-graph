"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesOrderByWithAggregationInput_1 = require("../../../inputs/SeasonSeriesOrderByWithAggregationInput");
const SeasonSeriesScalarWhereWithAggregatesInput_1 = require("../../../inputs/SeasonSeriesScalarWhereWithAggregatesInput");
const SeasonSeriesWhereInput_1 = require("../../../inputs/SeasonSeriesWhereInput");
const SeasonSeriesScalarFieldEnum_1 = require("../../../../enums/SeasonSeriesScalarFieldEnum");
let GroupBySeasonSeriesArgs = class GroupBySeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], GroupBySeasonSeriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesOrderByWithAggregationInput_1.SeasonSeriesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySeasonSeriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesScalarFieldEnum_1.SeasonSeriesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySeasonSeriesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesScalarWhereWithAggregatesInput_1.SeasonSeriesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesScalarWhereWithAggregatesInput_1.SeasonSeriesScalarWhereWithAggregatesInput)
], GroupBySeasonSeriesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySeasonSeriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySeasonSeriesArgs.prototype, "skip", void 0);
GroupBySeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySeasonSeriesArgs);
exports.GroupBySeasonSeriesArgs = GroupBySeasonSeriesArgs;
