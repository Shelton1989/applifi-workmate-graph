"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithRelationInput_1 = require("../../../inputs/EpisodeOrderByWithRelationInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
let AggregateEpisodeArgs = class AggregateEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], AggregateEpisodeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateEpisodeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], AggregateEpisodeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEpisodeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateEpisodeArgs.prototype, "skip", void 0);
AggregateEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateEpisodeArgs);
exports.AggregateEpisodeArgs = AggregateEpisodeArgs;
