"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateWithoutEpisodeInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutEpisodeInput = class ReactionUpdateWithWhereUniqueWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutEpisodeInput_1.ReactionUpdateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutEpisodeInput_1.ReactionUpdateWithoutEpisodeInput)
], ReactionUpdateWithWhereUniqueWithoutEpisodeInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutEpisodeInput);
exports.ReactionUpdateWithWhereUniqueWithoutEpisodeInput = ReactionUpdateWithWhereUniqueWithoutEpisodeInput;
