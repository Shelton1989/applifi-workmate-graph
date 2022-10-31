"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutReactionsInput_1 = require("../inputs/CommentCreateNestedOneWithoutReactionsInput");
const PostCreateNestedOneWithoutReactionsInput_1 = require("../inputs/PostCreateNestedOneWithoutReactionsInput");
const ReplyCreateNestedOneWithoutReactionsInput_1 = require("../inputs/ReplyCreateNestedOneWithoutReactionsInput");
const SeasonSeriesCreateNestedOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput");
const TopicCreateNestedOneWithoutReactionsInput_1 = require("../inputs/TopicCreateNestedOneWithoutReactionsInput");
const UserCreateNestedOneWithoutReactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionsInput");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateWithoutEpisodeInput = class ReactionCreateWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutEpisodeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutEpisodeInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutEpisodeInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutEpisodeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutEpisodeInput.prototype, "updatedAt", void 0);
ReactionCreateWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionCreateWithoutEpisodeInput);
exports.ReactionCreateWithoutEpisodeInput = ReactionCreateWithoutEpisodeInput;
