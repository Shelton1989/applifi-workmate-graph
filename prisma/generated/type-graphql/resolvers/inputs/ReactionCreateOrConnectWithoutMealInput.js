"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutMealInput_1 = require("../inputs/ReactionCreateWithoutMealInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutMealInput = class ReactionCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput)
], ReactionCreateOrConnectWithoutMealInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutMealInput);
exports.ReactionCreateOrConnectWithoutMealInput = ReactionCreateOrConnectWithoutMealInput;
