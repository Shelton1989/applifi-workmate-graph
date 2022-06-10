"use strict";
var ReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentRelationFilter_1 = require("../inputs/CommentRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReactionListRelationFilter_1 = require("../inputs/ReactionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ReplyWhereInput = ReplyWhereInput_1 = class ReplyWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReplyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReplyWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentRelationFilter_1.CommentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentRelationFilter_1.CommentRelationFilter)
], ReplyWhereInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReplyWhereInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ReplyWhereInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReplyWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionListRelationFilter_1.ReactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionListRelationFilter_1.ReactionListRelationFilter)
], ReplyWhereInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReplyWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReplyWhereInput.prototype, "updatedAt", void 0);
ReplyWhereInput = ReplyWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyWhereInput", {
        isAbstract: true
    })
], ReplyWhereInput);
exports.ReplyWhereInput = ReplyWhereInput;
