"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateNestedOneWithoutCommentsInput_1 = require("../inputs/DocumentCreateNestedOneWithoutCommentsInput");
const ReactionCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReactionCreateNestedManyWithoutCommentInput");
const ReplyCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReplyCreateNestedManyWithoutCommentInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateInput = class CommentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput)
], CommentCreateInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput)
], CommentCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateInput.prototype, "updatedAt", void 0);
CommentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateInput", {
        isAbstract: true
    })
], CommentCreateInput);
exports.CommentCreateInput = CommentCreateInput;
