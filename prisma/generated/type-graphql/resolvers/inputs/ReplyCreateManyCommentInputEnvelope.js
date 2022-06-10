"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateManyCommentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyCommentInput_1 = require("../inputs/ReplyCreateManyCommentInput");
let ReplyCreateManyCommentInputEnvelope = class ReplyCreateManyCommentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateManyCommentInput_1.ReplyCreateManyCommentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateManyCommentInputEnvelope.prototype, "data", void 0);
ReplyCreateManyCommentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateManyCommentInputEnvelope", {
        isAbstract: true
    })
], ReplyCreateManyCommentInputEnvelope);
exports.ReplyCreateManyCommentInputEnvelope = ReplyCreateManyCommentInputEnvelope;
