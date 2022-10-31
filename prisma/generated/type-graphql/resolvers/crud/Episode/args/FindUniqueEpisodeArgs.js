"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
let FindUniqueEpisodeArgs = class FindUniqueEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], FindUniqueEpisodeArgs.prototype, "where", void 0);
FindUniqueEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEpisodeArgs);
exports.FindUniqueEpisodeArgs = FindUniqueEpisodeArgs;
