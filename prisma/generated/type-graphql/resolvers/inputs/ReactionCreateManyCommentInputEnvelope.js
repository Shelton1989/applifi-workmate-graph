"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyCommentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyCommentInput_1 = require("../inputs/ReactionCreateManyCommentInput");
let ReactionCreateManyCommentInputEnvelope = class ReactionCreateManyCommentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyCommentInput_1.ReactionCreateManyCommentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyCommentInputEnvelope.prototype, "data", void 0);
ReactionCreateManyCommentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyCommentInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyCommentInputEnvelope);
exports.ReactionCreateManyCommentInputEnvelope = ReactionCreateManyCommentInputEnvelope;
