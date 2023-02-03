"use strict";
var ReactionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentRelationFilter_1 = require("../inputs/CommentRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumREACTION_TYPEFilter_1 = require("../inputs/EnumREACTION_TYPEFilter");
const ExperienceRelationFilter_1 = require("../inputs/ExperienceRelationFilter");
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const ReplyRelationFilter_1 = require("../inputs/ReplyRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ReactionWhereInput = ReactionWhereInput_1 = class ReactionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREACTION_TYPEFilter_1.EnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREACTION_TYPEFilter_1.EnumREACTION_TYPEFilter)
], ReactionWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceRelationFilter_1.ExperienceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceRelationFilter_1.ExperienceRelationFilter)
], ReactionWhereInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReactionWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostRelationFilter_1.PostRelationFilter)
], ReactionWhereInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReactionWhereInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentRelationFilter_1.CommentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentRelationFilter_1.CommentRelationFilter)
], ReactionWhereInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReactionWhereInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyRelationFilter_1.ReplyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyRelationFilter_1.ReplyRelationFilter)
], ReactionWhereInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReactionWhereInput.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ReactionWhereInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionWhereInput.prototype, "updatedAt", void 0);
ReactionWhereInput = ReactionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionWhereInput", {
        isAbstract: true
    })
], ReactionWhereInput);
exports.ReactionWhereInput = ReactionWhereInput;
