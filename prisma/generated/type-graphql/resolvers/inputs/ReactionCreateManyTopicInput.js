"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateManyTopicInput = class ReactionCreateManyTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyTopicInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateManyTopicInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateManyTopicInput.prototype, "updatedAt", void 0);
ReactionCreateManyTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyTopicInput", {
        isAbstract: true
    })
], ReactionCreateManyTopicInput);
exports.ReactionCreateManyTopicInput = ReactionCreateManyTopicInput;
