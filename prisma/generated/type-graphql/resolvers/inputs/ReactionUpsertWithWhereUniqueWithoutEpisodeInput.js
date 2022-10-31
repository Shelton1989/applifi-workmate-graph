"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutEpisodeInput_1 = require("../inputs/ReactionCreateWithoutEpisodeInput");
const ReactionUpdateWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateWithoutEpisodeInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutEpisodeInput = class ReactionUpsertWithWhereUniqueWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutEpisodeInput_1.ReactionUpdateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutEpisodeInput_1.ReactionUpdateWithoutEpisodeInput)
], ReactionUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput)
], ReactionUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutEpisodeInput);
exports.ReactionUpsertWithWhereUniqueWithoutEpisodeInput = ReactionUpsertWithWhereUniqueWithoutEpisodeInput;
