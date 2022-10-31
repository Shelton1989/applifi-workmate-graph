"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutPostInput_1 = require("../inputs/CommentUpdateManyWithoutPostInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumMEDIA_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutPostsInput_1 = require("../inputs/EpisodeUpdateOneWithoutPostsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdatemediaUrlInput_1 = require("../inputs/PostUpdatemediaUrlInput");
const ReactionUpdateManyWithoutPostInput_1 = require("../inputs/ReactionUpdateManyWithoutPostInput");
const TopicUpdateOneWithoutPostsInput_1 = require("../inputs/TopicUpdateOneWithoutPostsInput");
const UserUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsInput");
let PostUpdateWithoutSeasonSeriesInput = class PostUpdateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutPostInput_1.ReactionUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutPostInput_1.ReactionUpdateManyWithoutPostInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
PostUpdateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostUpdateWithoutSeasonSeriesInput);
exports.PostUpdateWithoutSeasonSeriesInput = PostUpdateWithoutSeasonSeriesInput;
