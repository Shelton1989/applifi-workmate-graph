"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyTopicInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyTopicInput_1 = require("../inputs/ReactionCreateManyTopicInput");
let ReactionCreateManyTopicInputEnvelope = class ReactionCreateManyTopicInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyTopicInput_1.ReactionCreateManyTopicInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyTopicInputEnvelope.prototype, "data", void 0);
ReactionCreateManyTopicInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyTopicInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyTopicInputEnvelope);
exports.ReactionCreateManyTopicInputEnvelope = ReactionCreateManyTopicInputEnvelope;
