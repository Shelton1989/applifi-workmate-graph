"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneWithoutReactionsInput_1 = require("../inputs/CommentUpdateOneWithoutReactionsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREACTION_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput");
const PostUpdateOneWithoutReactionsInput_1 = require("../inputs/PostUpdateOneWithoutReactionsInput");
const ReplyUpdateOneWithoutReactionsInput_1 = require("../inputs/ReplyUpdateOneWithoutReactionsInput");
const SeasonSeriesUpdateOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutReactionsInput");
const TopicUpdateOneWithoutReactionsInput_1 = require("../inputs/TopicUpdateOneWithoutReactionsInput");
const UserUpdateOneRequiredWithoutReactionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionsInput");
let ReactionUpdateWithoutEpisodeInput = class ReactionUpdateWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneWithoutReactionsInput_1.CommentUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutEpisodeInput.prototype, "updatedAt", void 0);
ReactionUpdateWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionUpdateWithoutEpisodeInput);
exports.ReactionUpdateWithoutEpisodeInput = ReactionUpdateWithoutEpisodeInput;
