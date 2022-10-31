"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutReactionsInput_1 = require("../inputs/CommentCreateNestedOneWithoutReactionsInput");
const EpisodeCreateNestedOneWithoutReactionsInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutReactionsInput");
const ReplyCreateNestedOneWithoutReactionsInput_1 = require("../inputs/ReplyCreateNestedOneWithoutReactionsInput");
const SeasonSeriesCreateNestedOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput");
const TopicCreateNestedOneWithoutReactionsInput_1 = require("../inputs/TopicCreateNestedOneWithoutReactionsInput");
const UserCreateNestedOneWithoutReactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionsInput");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateWithoutPostInput = class ReactionCreateWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutPostInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateWithoutPostInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutReactionsInput_1.CommentCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedOneWithoutReactionsInput_1.ReplyCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionsInput_1.UserCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutReactionsInput_1.TopicCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutReactionsInput_1.SeasonSeriesCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutReactionsInput_1.EpisodeCreateNestedOneWithoutReactionsInput)
], ReactionCreateWithoutPostInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateWithoutPostInput.prototype, "updatedAt", void 0);
ReactionCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateWithoutPostInput", {
        isAbstract: true
    })
], ReactionCreateWithoutPostInput);
exports.ReactionCreateWithoutPostInput = ReactionCreateWithoutPostInput;
