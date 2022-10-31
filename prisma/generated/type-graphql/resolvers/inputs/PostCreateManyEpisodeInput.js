"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreatemediaUrlInput_1 = require("../inputs/PostCreatemediaUrlInput");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let PostCreateManyEpisodeInput = class PostCreateManyEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatemediaUrlInput_1.PostCreatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatemediaUrlInput_1.PostCreatemediaUrlInput)
], PostCreateManyEpisodeInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateManyEpisodeInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyEpisodeInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyEpisodeInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyEpisodeInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManyEpisodeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManyEpisodeInput.prototype, "updatedAt", void 0);
PostCreateManyEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyEpisodeInput", {
        isAbstract: true
    })
], PostCreateManyEpisodeInput);
exports.PostCreateManyEpisodeInput = PostCreateManyEpisodeInput;
