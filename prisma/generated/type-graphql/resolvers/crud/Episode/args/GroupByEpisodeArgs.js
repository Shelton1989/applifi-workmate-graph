"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithAggregationInput_1 = require("../../../inputs/EpisodeOrderByWithAggregationInput");
const EpisodeScalarWhereWithAggregatesInput_1 = require("../../../inputs/EpisodeScalarWhereWithAggregatesInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
const EpisodeScalarFieldEnum_1 = require("../../../../enums/EpisodeScalarFieldEnum");
let GroupByEpisodeArgs = class GroupByEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], GroupByEpisodeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeOrderByWithAggregationInput_1.EpisodeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEpisodeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarFieldEnum_1.EpisodeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEpisodeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeScalarWhereWithAggregatesInput_1.EpisodeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeScalarWhereWithAggregatesInput_1.EpisodeScalarWhereWithAggregatesInput)
], GroupByEpisodeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEpisodeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEpisodeArgs.prototype, "skip", void 0);
GroupByEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEpisodeArgs);
exports.GroupByEpisodeArgs = GroupByEpisodeArgs;
