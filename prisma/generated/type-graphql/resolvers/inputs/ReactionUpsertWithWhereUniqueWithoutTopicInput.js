"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutTopicInput_1 = require("../inputs/ReactionCreateWithoutTopicInput");
const ReactionUpdateWithoutTopicInput_1 = require("../inputs/ReactionUpdateWithoutTopicInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutTopicInput = class ReactionUpsertWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutTopicInput_1.ReactionUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutTopicInput_1.ReactionUpdateWithoutTopicInput)
], ReactionUpsertWithWhereUniqueWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput)
], ReactionUpsertWithWhereUniqueWithoutTopicInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutTopicInput);
exports.ReactionUpsertWithWhereUniqueWithoutTopicInput = ReactionUpsertWithWhereUniqueWithoutTopicInput;
