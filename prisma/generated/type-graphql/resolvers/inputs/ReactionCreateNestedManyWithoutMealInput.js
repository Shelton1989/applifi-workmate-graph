"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyMealInputEnvelope_1 = require("../inputs/ReactionCreateManyMealInputEnvelope");
const ReactionCreateOrConnectWithoutMealInput_1 = require("../inputs/ReactionCreateOrConnectWithoutMealInput");
const ReactionCreateWithoutMealInput_1 = require("../inputs/ReactionCreateWithoutMealInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutMealInput = class ReactionCreateNestedManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutMealInput_1.ReactionCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyMealInputEnvelope_1.ReactionCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyMealInputEnvelope_1.ReactionCreateManyMealInputEnvelope)
], ReactionCreateNestedManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutMealInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutMealInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutMealInput);
exports.ReactionCreateNestedManyWithoutMealInput = ReactionCreateNestedManyWithoutMealInput;
