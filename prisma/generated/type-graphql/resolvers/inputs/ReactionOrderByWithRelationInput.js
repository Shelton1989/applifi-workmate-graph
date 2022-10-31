"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentOrderByWithRelationInput_1 = require("../inputs/CommentOrderByWithRelationInput");
const EpisodeOrderByWithRelationInput_1 = require("../inputs/EpisodeOrderByWithRelationInput");
const PostOrderByWithRelationInput_1 = require("../inputs/PostOrderByWithRelationInput");
const ReplyOrderByWithRelationInput_1 = require("../inputs/ReplyOrderByWithRelationInput");
const SeasonSeriesOrderByWithRelationInput_1 = require("../inputs/SeasonSeriesOrderByWithRelationInput");
const TopicOrderByWithRelationInput_1 = require("../inputs/TopicOrderByWithRelationInput");
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
    TypeGraphQL.Field(_type => TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput)
], ReactionOrderByWithRelationInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOrderByWithRelationInput.prototype, "episodeId", void 0);
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
