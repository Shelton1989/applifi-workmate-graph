"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByWithRelationInput_1 = require("../inputs/CommentOrderByWithRelationInput");
const PostOrderByWithRelationInput_1 = require("../inputs/PostOrderByWithRelationInput");
const ReplyOrderByWithRelationInput_1 = require("../inputs/ReplyOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOrderByWithRelationInput = class ReactionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByWithRelationInput_1.PostOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByWithRelationInput_1.PostOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByWithRelationInput_1.CommentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByWithRelationInput_1.CommentOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyOrderByWithRelationInput_1.ReplyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyOrderByWithRelationInput_1.ReplyOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "updatedAt", void 0);
ReactionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOrderByWithRelationInput", {
        isAbstract: true
    })
], ReactionOrderByWithRelationInput);
exports.ReactionOrderByWithRelationInput = ReactionOrderByWithRelationInput;
