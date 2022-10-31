"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateInput_1 = require("../../../inputs/EpisodeCreateInput");
let CreateEpisodeArgs = class CreateEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateInput_1.EpisodeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateInput_1.EpisodeCreateInput)
], CreateEpisodeArgs.prototype, "data", void 0);
CreateEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateEpisodeArgs);
exports.CreateEpisodeArgs = CreateEpisodeArgs;
