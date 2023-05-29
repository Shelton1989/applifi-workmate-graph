"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReactionCreateNestedManyWithoutCommentInput");
const ReplyCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReplyCreateNestedManyWithoutCommentInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutDocumentInput = class CommentCreateWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutDocumentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutDocumentInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutDocumentInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutDocumentInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutDocumentInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutDocumentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutDocumentInput.prototype, "updatedAt", void 0);
CommentCreateWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutDocumentInput", {
        isAbstract: true
    })
], CommentCreateWithoutDocumentInput);
exports.CommentCreateWithoutDocumentInput = CommentCreateWithoutDocumentInput;
