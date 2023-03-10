"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutMealInput_1 = require("../inputs/ReactionCreateWithoutMealInput");
const ReactionUpdateWithoutMealInput_1 = require("../inputs/ReactionUpdateWithoutMealInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutMealInput = class ReactionUpsertWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutMealInput_1.ReactionUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutMealInput_1.ReactionUpdateWithoutMealInput)
], ReactionUpsertWithWhereUniqueWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput)
], ReactionUpsertWithWhereUniqueWithoutMealInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutMealInput);
exports.ReactionUpsertWithWhereUniqueWithoutMealInput = ReactionUpsertWithWhereUniqueWithoutMealInput;
