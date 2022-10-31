"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEpisodeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateManyInput_1 = require("../../../inputs/EpisodeCreateManyInput");
let CreateManyEpisodeArgs = class CreateManyEpisodeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateManyInput_1.EpisodeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEpisodeArgs.prototype, "data", void 0);
CreateManyEpisodeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEpisodeArgs);
exports.CreateManyEpisodeArgs = CreateManyEpisodeArgs;
