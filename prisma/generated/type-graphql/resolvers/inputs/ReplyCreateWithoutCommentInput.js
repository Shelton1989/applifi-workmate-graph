"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateNestedManyWithoutReplyInput_1 = require("../inputs/ReactionCreateNestedManyWithoutReplyInput");
const UserCreateNestedOneWithoutRepliesInput_1 = require("../inputs/UserCreateNestedOneWithoutRepliesInput");
let ReplyCreateWithoutCommentInput = class ReplyCreateWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutCommentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutCommentInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutCommentInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput)
], ReplyCreateWithoutCommentInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutCommentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutCommentInput.prototype, "updatedAt", void 0);
ReplyCreateWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateWithoutCommentInput", {
        isAbstract: true
    })
], ReplyCreateWithoutCommentInput);
exports.ReplyCreateWithoutCommentInput = ReplyCreateWithoutCommentInput;
