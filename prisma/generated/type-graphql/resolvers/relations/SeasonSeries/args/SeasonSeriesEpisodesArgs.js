"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesEpisodesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithRelationInput_1 = require("../../../inputs/EpisodeOrderByWithRelationInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
const EpisodeScalarFieldEnum_1 = require("../../../../enums/EpisodeScalarFieldEnum");
let SeasonSeriesEpisodesArgs = class SeasonSeriesEpisodesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], SeasonSeriesEpisodesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesEpisodesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], SeasonSeriesEpisodesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesEpisodesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesEpisodesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarFieldEnum_1.EpisodeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesEpisodesArgs.prototype, "distinct", void 0);
SeasonSeriesEpisodesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], SeasonSeriesEpisodesArgs);
exports.SeasonSeriesEpisodesArgs = SeasonSeriesEpisodesArgs;
