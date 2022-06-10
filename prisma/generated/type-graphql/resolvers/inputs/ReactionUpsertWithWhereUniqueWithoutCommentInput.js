"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutCommentInput_1 = require("../inputs/ReactionCreateWithoutCommentInput");
const ReactionUpdateWithoutCommentInput_1 = require("../inputs/ReactionUpdateWithoutCommentInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutCommentInput = class ReactionUpsertWithWhereUniqueWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutCommentInput_1.ReactionUpdateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutCommentInput_1.ReactionUpdateWithoutCommentInput)
], ReactionUpsertWithWhereUniqueWithoutCommentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput)
], ReactionUpsertWithWhereUniqueWithoutCommentInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutCommentInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutCommentInput);
exports.ReactionUpsertWithWhereUniqueWithoutCommentInput = ReactionUpsertWithWhereUniqueWithoutCommentInput;
