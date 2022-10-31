"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREACTION_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREACTION_TYPEFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutReactionsInput_1 = require("../inputs/EpisodeUpdateOneWithoutReactionsInput");
const PostUpdateOneWithoutReactionsInput_1 = require("../inputs/PostUpdateOneWithoutReactionsInput");
const ReplyUpdateOneWithoutReactionsInput_1 = require("../inputs/ReplyUpdateOneWithoutReactionsInput");
const SeasonSeriesUpdateOneWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutReactionsInput");
const TopicUpdateOneWithoutReactionsInput_1 = require("../inputs/TopicUpdateOneWithoutReactionsInput");
const UserUpdateOneRequiredWithoutReactionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReactionsInput");
let ReactionUpdateWithoutCommentInput = class ReactionUpdateWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREACTION_TYPEFieldUpdateOperationsInput_1.EnumREACTION_TYPEFieldUpdateOperationsInput)
], ReactionUpdateWithoutCommentInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneWithoutReactionsInput_1.PostUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateOneWithoutReactionsInput_1.ReplyUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "Reply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReactionsInput_1.UserUpdateOneRequiredWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutReactionsInput_1.TopicUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutReactionsInput_1.SeasonSeriesUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutReactionsInput_1.EpisodeUpdateOneWithoutReactionsInput)
], ReactionUpdateWithoutCommentInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutCommentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReactionUpdateWithoutCommentInput.prototype, "updatedAt", void 0);
ReactionUpdateWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithoutCommentInput", {
        isAbstract: true
    })
], ReactionUpdateWithoutCommentInput);
exports.ReactionUpdateWithoutCommentInput = ReactionUpdateWithoutCommentInput;
