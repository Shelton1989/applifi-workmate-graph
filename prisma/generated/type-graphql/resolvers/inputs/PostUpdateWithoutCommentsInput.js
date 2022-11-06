"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumMEDIA_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumMEDIA_TYPEFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutPostsInput_1 = require("../inputs/EpisodeUpdateOneWithoutPostsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdatemediaUrlInput_1 = require("../inputs/PostUpdatemediaUrlInput");
const ReactionUpdateManyWithoutPostInput_1 = require("../inputs/ReactionUpdateManyWithoutPostInput");
const SeasonSeriesUpdateOneWithoutPostsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutPostsInput");
const TopicUpdateOneWithoutPostsInput_1 = require("../inputs/TopicUpdateOneWithoutPostsInput");
const UserUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsInput");
let PostUpdateWithoutCommentsInput = class PostUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput)
], PostUpdateWithoutCommentsInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutPostInput_1.ReactionUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutPostInput_1.ReactionUpdateManyWithoutPostInput)
], PostUpdateWithoutCommentsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutPostsInput_1.SeasonSeriesUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutPostsInput_1.SeasonSeriesUpdateOneWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "updatedAt", void 0);
PostUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutCommentsInput", {
        isAbstract: true
    })
], PostUpdateWithoutCommentsInput);
exports.PostUpdateWithoutCommentsInput = PostUpdateWithoutCommentsInput;
