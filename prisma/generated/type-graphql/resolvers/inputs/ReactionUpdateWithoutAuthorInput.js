"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneWithoutReactionsInput_1 = require("../inputs/CommentUpdateOneWithoutReactionsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREACTION_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutReactionsInput_1 = require("../inputs/EpisodeUpdateOneWithoutReactionsInput");
const PostUpdateOneWithoutReactionsInput_1 = require("../inputs/PostUpdateOneWithoutReactionsInput");
const ReplyUpdateOneWithoutReactionsInput_1 = require("../inputs/ReplyUpdateOneWithoutReactionsInput");
const SeasonSeriesUpdateOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutReactionsInput");
const TopicUpdateOneWithoutReactionsInput_1 = require("../inputs/TopicUpdateOneWithoutReactionsInput");
let ReactionUpdateWithoutAuthorInput = class ReactionUpdateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
ReactionUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithoutAuthorInput", {
        isAbstract: true
    })
], ReactionUpdateWithoutAuthorInput);
exports.ReactionUpdateWithoutAuthorInput = ReactionUpdateWithoutAuthorInput;
