"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const EpisodeCreateNestedOneWithoutPostsInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutPostsInput");
const PostCreatemediaUrlInput_1 = require("../inputs/PostCreatemediaUrlInput");
const ReactionCreateNestedManyWithoutPostInput_1 = require("../inputs/ReactionCreateNestedManyWithoutPostInput");
const SeasonSeriesCreateNestedOneWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutPostsInput");
const TopicCreateNestedOneWithoutPostsInput_1 = require("../inputs/TopicCreateNestedOneWithoutPostsInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let PostCreateInput = class PostCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatemediaUrlInput_1.PostCreatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatemediaUrlInput_1.PostCreatemediaUrlInput)
], PostCreateInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutPostInput_1.ReactionCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutPostInput_1.ReactionCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutPostsInput_1.TopicCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutPostsInput_1.TopicCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutPostsInput_1.SeasonSeriesCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutPostsInput_1.SeasonSeriesCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutPostsInput_1.EpisodeCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutPostsInput_1.EpisodeCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateInput.prototype, "updatedAt", void 0);
PostCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateInput", {
        isAbstract: true
    })
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
