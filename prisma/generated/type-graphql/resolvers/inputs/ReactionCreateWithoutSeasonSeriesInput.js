"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutReactionsInput_1 = require("../inputs/CommentCreateNestedOneWithoutReactionsInput");
const EpisodeCreateNestedOneWithoutReactionsInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutReactionsInput");
const PostCreateNestedOneWithoutReactionsInput_1 = require("../inputs/PostCreateNestedOneWithoutReactionsInput");
const ReplyCreateNestedOneWithoutReactionsInput_1 = require("../inputs/ReplyCreateNestedOneWithoutReactionsInput");
const TopicCreateNestedOneWithoutReactionsInput_1 = require("../inputs/TopicCreateNestedOneWithoutReactionsInput");
const UserCreateNestedOneWithoutReactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionsInput");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateWithoutSeasonSeriesInput = class ReactionCreateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutReactionsInput_1.PostCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
ReactionCreateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionCreateWithoutSeasonSeriesInput);
exports.ReactionCreateWithoutSeasonSeriesInput = ReactionCreateWithoutSeasonSeriesInput;
