"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutReplyInput_1 = require("../inputs/ReactionCreateWithoutReplyInput");
const ReactionUpdateWithoutReplyInput_1 = require("../inputs/ReactionUpdateWithoutReplyInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutReplyInput = class ReactionUpsertWithWhereUniqueWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutReplyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutReplyInput_1.ReactionUpdateWithoutReplyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutReplyInput_1.ReactionUpdateWithoutReplyInput)
], ReactionUpsertWithWhereUniqueWithoutReplyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput)
], ReactionUpsertWithWhereUniqueWithoutReplyInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutReplyInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutReplyInput);
exports.ReactionUpsertWithWhereUniqueWithoutReplyInput = ReactionUpsertWithWhereUniqueWithoutReplyInput;
