"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
let DeleteEpisodeArgs = class DeleteEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], DeleteEpisodeArgs.prototype, "where", void 0);
DeleteEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteEpisodeArgs);
exports.DeleteEpisodeArgs = DeleteEpisodeArgs;
