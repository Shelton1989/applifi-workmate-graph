"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesOrderByWithRelationInput_1 = require("../../../inputs/SeasonSeriesOrderByWithRelationInput");
const SeasonSeriesWhereInput_1 = require("../../../inputs/SeasonSeriesWhereInput");
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
const SeasonSeriesScalarFieldEnum_1 = require("../../../../enums/SeasonSeriesScalarFieldEnum");
let TopicSeasonSeriesArgs = class TopicSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], TopicSeasonSeriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicSeasonSeriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], TopicSeasonSeriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicSeasonSeriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicSeasonSeriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesScalarFieldEnum_1.SeasonSeriesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicSeasonSeriesArgs.prototype, "distinct", void 0);
TopicSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TopicSeasonSeriesArgs);
exports.TopicSeasonSeriesArgs = TopicSeasonSeriesArgs;
