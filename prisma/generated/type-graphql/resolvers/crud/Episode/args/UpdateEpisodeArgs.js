"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeUpdateInput_1 = require("../../../inputs/EpisodeUpdateInput");
const EpisodeWhereUniqueInput_1 = require("../../../inputs/EpisodeWhereUniqueInput");
let UpdateEpisodeArgs = class UpdateEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateInput_1.EpisodeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateInput_1.EpisodeUpdateInput)
], UpdateEpisodeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], UpdateEpisodeArgs.prototype, "where", void 0);
UpdateEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateEpisodeArgs);
exports.UpdateEpisodeArgs = UpdateEpisodeArgs;
