"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutReactionsInput = void 0;
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
const SeasonSeriesUpdateOneWithoutPostsInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutPostsInput");
const TopicUpdateOneWithoutPostsInput_1 = require("../inputs/TopicUpdateOneWithoutPostsInput");
const UserUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsInput");
let PostUpdateWithoutReactionsInput = class PostUpdateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEDIA_TYPEFieldUpdateOperationsInput_1.EnumMEDIA_TYPEFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdatemediaUrlInput_1.PostUpdatemediaUrlInput)
], PostUpdateWithoutReactionsInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutReactionsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput)
], PostUpdateWithoutReactionsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutPostsInput_1.TopicUpdateOneWithoutPostsInput)
], PostUpdateWithoutReactionsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutPostsInput_1.SeasonSeriesUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutPostsInput_1.SeasonSeriesUpdateOneWithoutPostsInput)
], PostUpdateWithoutReactionsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutPostsInput_1.EpisodeUpdateOneWithoutPostsInput)
], PostUpdateWithoutReactionsInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutReactionsInput.prototype, "updatedAt", void 0);
PostUpdateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutReactionsInput", {
        isAbstract: true
    })
], PostUpdateWithoutReactionsInput);
exports.PostUpdateWithoutReactionsInput = PostUpdateWithoutReactionsInput;
