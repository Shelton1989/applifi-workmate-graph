"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyMealInputEnvelope_1 = require("../inputs/ReactionCreateManyMealInputEnvelope");
const ReactionCreateOrConnectWithoutMealInput_1 = require("../inputs/ReactionCreateOrConnectWithoutMealInput");
const ReactionCreateWithoutMealInput_1 = require("../inputs/ReactionCreateWithoutMealInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutMealInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutMealInput");
const ReactionUpdateWithWhereUniqueWithoutMealInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutMealInput");
const ReactionUpsertWithWhereUniqueWithoutMealInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutMealInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutMealInput = class ReactionUpdateManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutMealInput_1.ReactionCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutMealInput_1.ReactionCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutMealInput_1.ReactionUpsertWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyMealInputEnvelope_1.ReactionCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyMealInputEnvelope_1.ReactionCreateManyMealInputEnvelope)
], ReactionUpdateManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutMealInput_1.ReactionUpdateWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutMealInput_1.ReactionUpdateManyWithWhereWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutMealInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutMealInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutMealInput);
exports.ReactionUpdateManyWithoutMealInput = ReactionUpdateManyWithoutMealInput;
