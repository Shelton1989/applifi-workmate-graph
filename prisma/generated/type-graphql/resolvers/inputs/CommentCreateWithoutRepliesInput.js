"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateNestedOneWithoutCommentsInput_1 = require("../inputs/DocumentCreateNestedOneWithoutCommentsInput");
const ReactionCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReactionCreateNestedManyWithoutCommentInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutRepliesInput = class CommentCreateWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutRepliesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutRepliesInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutRepliesInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutRepliesInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutRepliesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutRepliesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutRepliesInput.prototype, "updatedAt", void 0);
CommentCreateWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutRepliesInput", {
        isAbstract: true
    })
], CommentCreateWithoutRepliesInput);
exports.CommentCreateWithoutRepliesInput = CommentCreateWithoutRepliesInput;
