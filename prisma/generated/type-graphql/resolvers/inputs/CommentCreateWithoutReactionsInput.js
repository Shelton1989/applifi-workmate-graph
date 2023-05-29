"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateNestedOneWithoutCommentsInput_1 = require("../inputs/DocumentCreateNestedOneWithoutCommentsInput");
const ReplyCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReplyCreateNestedManyWithoutCommentInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutReactionsInput = class CommentCreateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutReactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutReactionsInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutCommentsInput_1.DocumentCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutReactionsInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutReactionsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutReactionsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutReactionsInput.prototype, "updatedAt", void 0);
CommentCreateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutReactionsInput", {
        isAbstract: true
    })
], CommentCreateWithoutReactionsInput);
exports.CommentCreateWithoutReactionsInput = CommentCreateWithoutReactionsInput;
