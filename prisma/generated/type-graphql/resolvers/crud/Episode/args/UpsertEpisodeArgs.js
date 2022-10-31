"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateInput_1 = require("../../../inputs/EpisodeCreateInput");
const EpisodeUpdateInput_1 = require("../../../inputs/EpisodeUpdateInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
let UpsertEpisodeArgs = class UpsertEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], UpsertEpisodeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateInput_1.EpisodeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateInput_1.EpisodeCreateInput)
], UpsertEpisodeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateInput_1.EpisodeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateInput_1.EpisodeUpdateInput)
], UpsertEpisodeArgs.prototype, "update", void 0);
UpsertEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertEpisodeArgs);
exports.UpsertEpisodeArgs = UpsertEpisodeArgs;
