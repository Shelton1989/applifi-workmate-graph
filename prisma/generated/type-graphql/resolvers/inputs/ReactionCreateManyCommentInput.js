"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let ReactionCreateManyCommentInput = class ReactionCreateManyCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyCommentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyCommentInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyCommentInput.prototype, "replyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionCreateManyCommentInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateManyCommentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionCreateManyCommentInput.prototype, "updatedAt", void 0);
ReactionCreateManyCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyCommentInput", {
        isAbstract: true
    })
], ReactionCreateManyCommentInput);
exports.ReactionCreateManyCommentInput = ReactionCreateManyCommentInput;
