"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const EpisodeCreateNestedOneWithoutPostsInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutPostsInput");
const PostCreatemediaUrlInput_1 = require("../inputs/PostCreatemediaUrlInput");
const ReactionCreateNestedManyWithoutPostInput_1 = require("../inputs/ReactionCreateNestedManyWithoutPostInput");
const TopicCreateNestedOneWithoutPostsInput_1 = require("../inputs/TopicCreateNestedOneWithoutPostsInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let PostCreateWithoutSeasonSeriesInput = class PostCreateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutSeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutSeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutSeasonSeriesInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatemediaUrlInput_1.PostCreatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatemediaUrlInput_1.PostCreatemediaUrlInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutSeasonSeriesInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateWithoutSeasonSeriesInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateWithoutSeasonSeriesInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutPostInput_1.ReactionCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutPostInput_1.ReactionCreateNestedManyWithoutPostInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutPostsInput_1.TopicCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutPostsInput_1.TopicCreateNestedOneWithoutPostsInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutPostsInput_1.EpisodeCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutPostsInput_1.EpisodeCreateNestedOneWithoutPostsInput)
], PostCreateWithoutSeasonSeriesInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutSeasonSeriesInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
PostCreateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostCreateWithoutSeasonSeriesInput);
exports.PostCreateWithoutSeasonSeriesInput = PostCreateWithoutSeasonSeriesInput;
