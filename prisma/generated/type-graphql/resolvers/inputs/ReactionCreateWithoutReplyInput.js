"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutReactionsInput_1 = require("../inputs/CommentCreateNestedOneWithoutReactionsInput");
const EpisodeCreateNestedOneWithoutReactionsInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutReactionsInput");
const PostCreateNestedOneWithoutReactionsInput_1 = require("../inputs/PostCreateNestedOneWithoutReactionsInput");
const SeasonSeriesCreateNestedOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput");
const TopicCreateNestedOneWithoutReactionsInput_1 = require("../inputs/TopicCreateNestedOneWithoutReactionsInput");
const UserCreateNestedOneWithoutReactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionsInput");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateWithoutReplyInput = class ReactionCreateWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutReplyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutReplyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutReplyInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutReplyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutReplyInput.prototype, "updatedAt", void 0);
ReactionCreateWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateWithoutReplyInput", {
        isAbstract: true
    })
], ReactionCreateWithoutReplyInput);
exports.ReactionCreateWithoutReplyInput = ReactionCreateWithoutReplyInput;
