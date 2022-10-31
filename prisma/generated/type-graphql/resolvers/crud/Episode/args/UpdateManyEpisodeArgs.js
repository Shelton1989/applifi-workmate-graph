"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeUpdateManyMutationInput_1 = require("../../../inputs/EpisodeUpdateManyMutationInput");
const EpisodeWhereInput_1 = require("../../../inputs/EpisodeWhereInput");
let UpdateManyEpisodeArgs = class UpdateManyEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateManyMutationInput_1.EpisodeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateManyMutationInput_1.EpisodeUpdateManyMutationInput)
], UpdateManyEpisodeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereInput_1.EpisodeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereInput_1.EpisodeWhereInput)
], UpdateManyEpisodeArgs.prototype, "where", void 0);
UpdateManyEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEpisodeArgs);
exports.UpdateManyEpisodeArgs = UpdateManyEpisodeArgs;
