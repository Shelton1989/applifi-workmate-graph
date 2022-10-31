"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManySeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreatemediaUrlInput_1 = require("../inputs/PostCreatemediaUrlInput");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let PostCreateManySeasonSeriesInput = class PostCreateManySeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatemediaUrlInput_1.PostCreatemediaUrlInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatemediaUrlInput_1.PostCreatemediaUrlInput)
], PostCreateManySeasonSeriesInput.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateManySeasonSeriesInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManySeasonSeriesInput.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManySeasonSeriesInput.prototype, "canBeCounted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManySeasonSeriesInput.prototype, "postLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManySeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManySeasonSeriesInput.prototype, "updatedAt", void 0);
PostCreateManySeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManySeasonSeriesInput", {
        isAbstract: true
    })
], PostCreateManySeasonSeriesInput);
exports.PostCreateManySeasonSeriesInput = PostCreateManySeasonSeriesInput;
