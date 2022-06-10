"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutRepliesInput_1 = require("../inputs/CommentCreateNestedOneWithoutRepliesInput");
const ReactionCreateNestedManyWithoutReplyInput_1 = require("../inputs/ReactionCreateNestedManyWithoutReplyInput");
let ReplyCreateWithoutAuthorInput = class ReplyCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutAuthorInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput)
], ReplyCreateWithoutAuthorInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
ReplyCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyCreateWithoutAuthorInput);
exports.ReplyCreateWithoutAuthorInput = ReplyCreateWithoutAuthorInput;
