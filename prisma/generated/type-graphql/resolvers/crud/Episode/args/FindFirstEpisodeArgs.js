"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithRelationInput_1 = require("../../../inputs/EpisodeOrderByWithRelationInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
const EpisodeScalarFieldEnum_1 = require("../../../../enums/EpisodeScalarFieldEnum");
let FindFirstEpisodeArgs = class FindFirstEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], FindFirstEpisodeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEpisodeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], FindFirstEpisodeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEpisodeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEpisodeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarFieldEnum_1.EpisodeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEpisodeArgs.prototype, "distinct", void 0);
FindFirstEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEpisodeArgs);
exports.FindFirstEpisodeArgs = FindFirstEpisodeArgs;
