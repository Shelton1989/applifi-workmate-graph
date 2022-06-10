"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyReplyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyReplyInput_1 = require("../inputs/ReactionCreateManyReplyInput");
let ReactionCreateManyReplyInputEnvelope = class ReactionCreateManyReplyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyReplyInput_1.ReactionCreateManyReplyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyReplyInputEnvelope.prototype, "data", void 0);
ReactionCreateManyReplyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyReplyInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyReplyInputEnvelope);
exports.ReactionCreateManyReplyInputEnvelope = ReactionCreateManyReplyInputEnvelope;
