"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutMealInput_1 = require("../inputs/ReactionUpdateWithoutMealInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutMealInput = class ReactionUpdateWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutMealInput_1.ReactionUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutMealInput_1.ReactionUpdateWithoutMealInput)
], ReactionUpdateWithWhereUniqueWithoutMealInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutMealInput);
exports.ReactionUpdateWithWhereUniqueWithoutMealInput = ReactionUpdateWithWhereUniqueWithoutMealInput;
