"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithRelationInput_1 = require("../../../inputs/EpisodeOrderByWithRelationInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
const EpisodeScalarFieldEnum_1 = require("../../../../enums/EpisodeScalarFieldEnum");
let FindManyEpisodeArgs = class FindManyEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], FindManyEpisodeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEpisodeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], FindManyEpisodeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEpisodeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEpisodeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarFieldEnum_1.EpisodeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEpisodeArgs.prototype, "distinct", void 0);
FindManyEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEpisodeArgs);
exports.FindManyEpisodeArgs = FindManyEpisodeArgs;
