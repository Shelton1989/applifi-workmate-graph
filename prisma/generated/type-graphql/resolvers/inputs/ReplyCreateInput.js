"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutRepliesInput_1 = require("../inputs/CommentCreateNestedOneWithoutRepliesInput");
const ReactionCreateNestedManyWithoutReplyInput_1 = require("../inputs/ReactionCreateNestedManyWithoutReplyInput");
const UserCreateNestedOneWithoutRepliesInput_1 = require("../inputs/UserCreateNestedOneWithoutRepliesInput");
let ReplyCreateInput = class ReplyCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput)
], ReplyCreateInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput)
], ReplyCreateInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutReplyInput_1.ReactionCreateNestedManyWithoutReplyInput)
], ReplyCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateInput.prototype, "updatedAt", void 0);
ReplyCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateInput", {
        isAbstract: true
    })
], ReplyCreateInput);
exports.ReplyCreateInput = ReplyCreateInput;
