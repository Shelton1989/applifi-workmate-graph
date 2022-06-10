"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutCommentsInput_1 = require("../inputs/PostCreateNestedOneWithoutCommentsInput");
const ReactionCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReactionCreateNestedManyWithoutCommentInput");
const ReplyCreateNestedManyWithoutCommentInput_1 = require("../inputs/ReplyCreateNestedManyWithoutCommentInput");
let CommentCreateWithoutAuthorInput = class CommentCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutAuthorInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutCommentInput_1.ReplyCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutAuthorInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutCommentInput_1.ReactionCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutAuthorInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
CommentCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutAuthorInput", {
        isAbstract: true
    })
], CommentCreateWithoutAuthorInput);
exports.CommentCreateWithoutAuthorInput = CommentCreateWithoutAuthorInput;
