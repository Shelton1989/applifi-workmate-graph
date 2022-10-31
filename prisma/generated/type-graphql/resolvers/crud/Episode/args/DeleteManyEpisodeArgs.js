"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
let DeleteManyEpisodeArgs = class DeleteManyEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], DeleteManyEpisodeArgs.prototype, "where", void 0);
DeleteManyEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEpisodeArgs);
exports.DeleteManyEpisodeArgs = DeleteManyEpisodeArgs;
