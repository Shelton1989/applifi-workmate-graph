"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesOrderByWithRelationInput_1 = require("../../../inputs/SeasonSeriesOrderByWithRelationInput");
const SeasonSeriesWhereInput_1 = require("../../../inputs/SeasonSeriesWhereInput");
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
let AggregateSeasonSeriesArgs = class AggregateSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], AggregateSeasonSeriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSeasonSeriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], AggregateSeasonSeriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSeasonSeriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSeasonSeriesArgs.prototype, "skip", void 0);
AggregateSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSeasonSeriesArgs);
exports.AggregateSeasonSeriesArgs = AggregateSeasonSeriesArgs;
