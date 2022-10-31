"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyEpisodeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyEpisodeInput_1 = require("../inputs/ReactionCreateManyEpisodeInput");
let ReactionCreateManyEpisodeInputEnvelope = class ReactionCreateManyEpisodeInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyEpisodeInput_1.ReactionCreateManyEpisodeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyEpisodeInputEnvelope.prototype, "data", void 0);
ReactionCreateManyEpisodeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyEpisodeInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyEpisodeInputEnvelope);
exports.ReactionCreateManyEpisodeInputEnvelope = ReactionCreateManyEpisodeInputEnvelope;
