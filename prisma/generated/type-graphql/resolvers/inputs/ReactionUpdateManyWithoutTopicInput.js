"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyTopicInputEnvelope_1 = require("../inputs/ReactionCreateManyTopicInputEnvelope");
const ReactionCreateOrConnectWithoutTopicInput_1 = require("../inputs/ReactionCreateOrConnectWithoutTopicInput");
const ReactionCreateWithoutTopicInput_1 = require("../inputs/ReactionCreateWithoutTopicInput");
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyWithWhereWithoutTopicInput_1 = require("../inputs/ReactionUpdateManyWithWhereWithoutTopicInput");
const ReactionUpdateWithWhereUniqueWithoutTopicInput_1 = require("../inputs/ReactionUpdateWithWhereUniqueWithoutTopicInput");
const ReactionUpsertWithWhereUniqueWithoutTopicInput_1 = require("../inputs/ReactionUpsertWithWhereUniqueWithoutTopicInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateManyWithoutTopicInput = class ReactionUpdateManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutTopicInput_1.ReactionCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpsertWithWhereUniqueWithoutTopicInput_1.ReactionUpsertWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyTopicInputEnvelope_1.ReactionCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyTopicInputEnvelope_1.ReactionCreateManyTopicInputEnvelope)
], ReactionUpdateManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateWithWhereUniqueWithoutTopicInput_1.ReactionUpdateWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionUpdateManyWithWhereWithoutTopicInput_1.ReactionUpdateManyWithWhereWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarWhereInput_1.ReactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionUpdateManyWithoutTopicInput.prototype, "deleteMany", void 0);
ReactionUpdateManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithoutTopicInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithoutTopicInput);
exports.ReactionUpdateManyWithoutTopicInput = ReactionUpdateManyWithoutTopicInput;
