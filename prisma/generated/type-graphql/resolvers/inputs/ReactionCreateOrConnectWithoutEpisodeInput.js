"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutEpisodeInput_1 = require("../inputs/ReactionCreateWithoutEpisodeInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutEpisodeInput = class ReactionCreateOrConnectWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput)
], ReactionCreateOrConnectWithoutEpisodeInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutEpisodeInput);
exports.ReactionCreateOrConnectWithoutEpisodeInput = ReactionCreateOrConnectWithoutEpisodeInput;
