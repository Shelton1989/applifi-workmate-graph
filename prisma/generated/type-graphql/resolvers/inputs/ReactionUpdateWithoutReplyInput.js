"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneWithoutReactionsInput_1 = require("../inputs/CommentUpdateOneWithoutReactionsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREACTION_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutReactionsInput_1 = require("../inputs/EpisodeUpdateOneWithoutReactionsInput");
const PostUpdateOneWithoutReactionsInput_1 = require("../inputs/PostUpdateOneWithoutReactionsInput");
const SeasonSeriesUpdateOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutReactionsInput");
const TopicUpdateOneWithoutReactionsInput_1 = require("../inputs/TopicUpdateOneWithoutReactionsInput");
const UserUpdateOneRequiredWithoutReactionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionsInput");
let ReactionUpdateWithoutReplyInput = class ReactionUpdateWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput)
], ReactionUpdateWithoutReplyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutReplyInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutReplyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutReplyInput.prototype, "updatedAt", void 0);
ReactionUpdateWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithoutReplyInput", {
        isAbstract: true
    })
], ReactionUpdateWithoutReplyInput);
exports.ReactionUpdateWithoutReplyInput = ReactionUpdateWithoutReplyInput;
