"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentOrderByWithRelationInput_1 = require("../inputs/DocumentOrderByWithRelationInput");
const ReactionOrderByRelationAggregateInput_1 = require("../inputs/ReactionOrderByRelationAggregateInput");
const ReplyOrderByRelationAggregateInput_1 = require("../inputs/ReplyOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentOrderByWithRelationInput = class CommentOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentOrderByWithRelationInput_1.DocumentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentOrderByWithRelationInput_1.DocumentOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyOrderByRelationAggregateInput_1.ReplyOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyOrderByRelationAggregateInput_1.ReplyOrderByRelationAggregateInput)
], CommentOrderByWithRelationInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput)
], CommentOrderByWithRelationInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "updatedAt", void 0);
CommentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentOrderByWithRelationInput", {
        isAbstract: true
    })
], CommentOrderByWithRelationInput);
exports.CommentOrderByWithRelationInput = CommentOrderByWithRelationInput;
